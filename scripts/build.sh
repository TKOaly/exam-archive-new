#!/usr/bin/env bash
set -o errexit -o nounset -o pipefail

readonly repository="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && cd .. && pwd)"
readonly ENV="build"
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

    start_db_s3
    get_environment_variables
    build_app

    popd
}

main "$@"