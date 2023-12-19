#!/usr/bin/env bash
set -o errexit -o nounset -o pipefail

readonly repository="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd)"
export COMPOSE_PROJECT_NAME="tarpisto-prod"
source "$repository/scripts/common.sh"

function stop() {
  pushd "$repository"
  required_command docker
  required_command docker-compose
  docker-compose -f docker-compose.yml -f docker-compose.prod.yml down -v || true
  popd
}
trap stop EXIT

function main() {
    required_command npm
    required_command docker
    required_command docker-compose

    pushd "$repository"

    export PORT=${PORT:-"9000"} # Docker-compose exposes this port in 9020

    export USER_SERVICE_SERVICE_ID=${USER_SERVICE_SERVICE_ID:-"11188b9c-9534-4faf-8355-60973b720647"}
    export USER_SERVICE_URL=${USER_SERVICE_URL:-"http://127.0.0.1:8080"}
    export USER_SERVICE_SECRET=${USER_SERVICE_SECRET:-"catlike-meringue-tying-PASTERN-bed-simply"}

    export NEXTAUTH_URL=${NEXTAUTH_URL:-"http://127.0.0.1:9000"}
    export NEXTAUTH_SECRET=${NEXTAUTH_SECRET:-"catlike-meringue-tying-PASTERN-bed-simply"}

    export AWS_REGION=${AWS_REGION:-"eu-west-1"}
    export AWS_ACCESS_KEY_ID=${AWS_ACCESS_KEY_ID:-"tarpisto"}
    export AWS_SECRET_ACCESS_KEY=${AWS_SECRET_ACCESS_KEY:-"tarpisto"}

    export AWS_S3_FORCE_PATH_STYLE=${AWS_S3_FORCE_PATH_STYLE:-true}
    export AWS_S3_BUCKET_ID=${AWS_S3_BUCKET_ID:-"tarpisto-local"}

    export NODE_ENV=${NODE_ENV:-"production"}
    export APP_ENV=${APP_ENV:-"development"}

    docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d db s3

    db_health_check
    s3_health_check

    export PG_CONNECTION_STRING=${PG_CONNECTION_STRING:-"postgresql://tarpisto:tarpisto@$(docker-compose port db 5432)/tarpisto"}
    export AWS_S3_ENDPOINT=${AWS_S3_ENDPOINT:-"http://$(docker-compose port s3 9001)"}

    build_docker_image

    export PG_CONNECTION_STRING=postgresql://tarpisto:tarpisto@db:5432/tarpisto
    export AWS_S3_ENDPOINT=http://s3:9000

    docker-compose -f docker-compose.yml -f docker-compose.prod.yml up tarpisto

    popd
}

main "$@"