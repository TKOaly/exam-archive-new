#!/usr/bin/env bash
set -o errexit -o nounset -o pipefail

readonly repository="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd)"
readonly ENV="test"
source "$repository/scripts/common.sh"

function stop() {
  pushd "$repository"
  compose_cmd down -v || true
  popd
}
trap stop EXIT

function main() {
    required_command npm

    pushd "$repository"

    echo "::group::Installing node and dependencies"
    check_node_version
    npm_ci
    npm run test:install
    echo "::endgroup::"

    echo "::group::Starting database and S3"
    compose_cmd up -d db s3

    db_health_check
    s3_health_check
    echo "::endgroup::"

    get_environment_variables

    echo "::group::Building application"
    echo "::debug::Running database migrations"
    NODE_ENV=development npm run db:migrate
    echo "::debug::Building application"
    NODE_ENV=test npm run build
    echo "::endgroup::"

    echo "::group::Running tests"
    npm run test
    echo "::endgroup::"

    popd
}

main "$@"