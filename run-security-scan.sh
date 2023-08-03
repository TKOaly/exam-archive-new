#!/usr/bin/env bash
set -o errexit -o nounset -o pipefail

readonly repository="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd)"
export COMPOSE_PROJECT_NAME="exam-archive-new-security"
source "$repository/scripts/common.sh"

function stop() {
  pushd "$repository"
  required_command docker
  required_command docker-compose
  docker-compose -f docker-compose.yml -f docker-compose.security.yml down -v || true
  popd
}
trap stop EXIT

function main() {
    required_command npm
    required_command docker
    required_command docker-compose

    pushd "$repository"
    export PORT=${PORT:-"9000"}

    export COOKIE_NAME=${COOKIE_NAME:-"tarpisto"}
    export COOKIE_SECRET=${COOKIE_SECRET:-"catlike-meringue-tying-PASTERN-bed-simply"}
    export COOKIE_ISSUER=${COOKIE_ISSUER:-"tkoaly"}
    export COOKIE_SUBJECT=${COOKIE_SUBJECT:-"tarpisto"}
    export COOKIE_JWTID=${COOKIE_JWTID:-"tarpisto"}

    export USER_SERVICE_SERVICE_ID=${USER_SERVICE_SERVICE_ID:-"11188b9c-9534-4faf-8355-60973b720647"}
    export USER_SERVICE_URL=${USER_SERVICE_URL:-"http://127.0.0.1:8080"}

    export AWS_REGION=${AWS_REGION:-"eu-west-1"}
    export AWS_ACCESS_KEY_ID=${AWS_ACCESS_KEY_ID:-"tarpisto"}
    export AWS_SECRET_ACCESS_KEY=${AWS_SECRET_ACCESS_KEY:-"tarpisto"}

    export AWS_S3_FORCE_PATH_STYLE=${AWS_S3_FORCE_PATH_STYLE:-true}
    export AWS_S3_BUCKET_ID=${AWS_S3_BUCKET_ID:-"exam-archive-local"}

    export NODE_ENV="development"

    echo "::group::Installing node and dependencies"
    check_node_version
    npm_ci
    echo "::endgroup::"

    export NODE_ENV="production"
    export APP_ENV=${APP_ENV:-"development"}

    echo "::group::Starting database and S3"
    docker-compose -f docker-compose.yml -f docker-compose.security.yml up -d db s3

    db_health_check
    s3_health_check
    echo "::endgroup::"

    echo "::group::Building application"
    export PG_CONNECTION_STRING=${PG_CONNECTION_STRING:-"postgresql://tarpisto:tarpisto@$(docker-compose port db 5432)/tarpisto"}
    export AWS_S3_ENDPOINT=${AWS_S3_ENDPOINT:-"http://$(docker-compose port s3 9000)"}

    build_docker_image

    echo "::endgroup::"

    echo "::group::Run database migrations and seeds"
    npm run db:migrate
    NODE_ENV=development npm run db:seed
    echo "::endgroup::"

    echo "::group::Starting application"
    export PG_CONNECTION_STRING=postgresql://tarpisto:tarpisto@db:5432/tarpisto
    export AWS_S3_ENDPOINT=http://s3:9000
    docker-compose -f docker-compose.yml -f docker-compose.security.yml up -d tarpisto
    echo "::endgroup::"

    echo "::group::Running security scan"
    mkdir -p test-results

    if [[ -f "${GITHUB_ACTIONS:-}" ]]; then
      echo "::debug::Running in GitHub Actions, so doing some file permission magic" # Maybe in future: check if Linux instead of GHA
      chown -R zap:zap test-results
      chmod -R 777 test-results
    fi

    docker-compose -f docker-compose.yml -f docker-compose.security.yml up --exit-code-from security security
    # docker-compose -f docker-compose.yml -f docker-compose.security.yml cp security:/tmp/zap/reports/security-report.md ./test-results/security-report.md
    echo "::endgroup::"

    if [[ -f "$GITHUB_STEP_SUMMARY" ]]; then
      echo "::group::Report results"
      echo "$(cat ./test-results/security-report.md)" >> $GITHUB_STEP_SUMMARY
      echo "::endgroup::"
    fi

    popd
}

main "$@"