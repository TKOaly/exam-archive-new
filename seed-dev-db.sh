#!/usr/bin/env bash
set -o errexit -o nounset -o pipefail

readonly repository="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd)"
source "$repository/scripts/common.sh"

function main() {
    pushd "$repository"

    required_command npm

    export NODE_ENV=development
    export PG_CONNECTION_STRING=postgresql://tarpisto:Su5hgVvoqUCRw5vrWmrW@$(docker-compose port db 5432)/tarpisto

    npm run db:seed

    popd
}

main "$@"

