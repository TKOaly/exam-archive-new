#!/usr/bin/env bash
set -o errexit -o nounset -o pipefail

export COMPOSE_PROJECT_NAME="exam-archive-new-build"
readonly repository="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && cd .. && pwd)"
source "$repository/scripts/common.sh"

function main() {
    required_command npm
    required_command docker
    required_command docker-compose

    pushd "$repository"

    echo "::group::Installing node and dependencies"
    check_node_version
    npm_ci
    echo "::endgroup::"

    echo "::group::Starting database and S3"
    docker-compose up -d db s3

    db_health_check
    s3_health_check
    echo "::endgroup::"

    export DOCKER_TAGS=${"-t $DOCKER_TAGS":-"tarpisto/tarpisto:latest"}
    export DOCKER_LABELS=${"--label $DOCKER_LABELS":-""}

    build_docker_image

    popd
}

main "$@"