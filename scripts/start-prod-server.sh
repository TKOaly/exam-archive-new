#!/usr/bin/env bash
set -o errexit -o nounset -o pipefail

readonly repository="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && cd .. && pwd)"
echo "Repository: $repository"
source "$repository/scripts/common.sh"

function main() {
    required_command npm
    pushd "$repository"

    export PORT=${PORT:-"9000"}
    export PG_CONNECTION_STRING=${PG_CONNECTION_STRING}

    export COOKIE_NAME=${COOKIE_NAME}
    export COOKIE_SECRET=${COOKIE_SECRET}
    export COOKIE_ISSUER=${COOKIE_ISSUER}
    export COOKIE_SUBJECT=${COOKIE_SUBJECT}
    export COOKIE_JWTID=${COOKIE_JWTID}

    export USER_SERVICE_SERVICE_ID=${USER_SERVICE_SERVICE_ID}
    export USER_SERVICE_URL=${USER_SERVICE_URL}

    export AWS_REGION=${AWS_REGION}
    export AWS_ACCESS_KEY_ID=${AWS_ACCESS_KEY_ID}
    export AWS_SECRET_ACCESS_KEY=${AWS_SECRET_ACCESS_KEY}

    export AWS_S3_ENDPOINT=${AWS_S3_ENDPOINT}
    export AWS_S3_FORCE_PATH_STYLE=${AWS_S3_FORCE_PATH_STYLE}
    export AWS_S3_BUCKET_ID=${AWS_S3_BUCKET_ID}

    export NODE_ENV=${NODE_ENV:-"production"}
    export APP_ENV=${APP_ENV:-"production"}

    npm run db:migrate
    npm run start

    popd
}

main "$@"