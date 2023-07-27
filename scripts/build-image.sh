#!/usr/bin/env bash
set -o errexit -o nounset -o pipefail

readonly repository="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && cd .. && pwd)"
source "$repository/scripts/common.sh"

function main() {

    pushd "$repository"

    export DOCKER_TAGS=${DOCKER_TAGS:-"tarpisto/tarpisto:latest"}
    export DOCKER_LABELS=${DOCKER_LABELS:-""}

    echo "Docker tags: $DOCKER_TAGS"
    echo "Docker labels: $DOCKER_LABELS"

    build_docker_image

    popd
}

main "$@"