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

    npm_ci

    echo "::group::Installing test tooling"
    npm run test:install
    echo "::endgroup::"

    start_db_s3

    get_environment_variables

    build_app

    echo "::group::Running tests"
    npm run test
    echo "::endgroup::"

    popd
}

main "$@"