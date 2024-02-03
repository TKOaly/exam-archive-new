#!/usr/bin/env bash
set -o errexit -o nounset -o pipefail

readonly repository="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd)"
readonly ENV="local"

source "$repository/scripts/common.sh"

function stop() {
  pushd "$repository"
  compose_cmd down || true
  popd
}
trap stop EXIT

function main() {
    required_command npm

    pushd "$repository"

    compose_cmd up -d db s3

    get_environment_variables

    db_health_check
    s3_health_check

    build_docker_image

    compose_cmd up tarpisto

    popd
}

main "$@"