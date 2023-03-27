#!/usr/bin/env bash
set -o errexit -o nounset -o pipefail

readonly repository="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && cd .. && pwd)"
source "$repository/scripts/common.sh"

function db_health_check() {
    pushd "$repository"

    required_command docker
    required_command docker-compose

    until docker-compose exec db pg_isready -U tarpisto &>/dev/null; do
        echo "Waiting for database to be healthy. Trying again in 5 seconds."
        sleep 5;
    done

    popd
}

function s3_health_check() {
    pushd "$repository"

    required_command curl

    until curl -I "http://$(docker-compose port s3 9000)/minio/health/live" &>/dev/null; do
        echo "Waiting for s3 to be healthy. Trying again in 5 seconds."
        sleep 5;
    done

    popd
}

function main() {
    required_command npm
    pushd "$repository"

    db_health_check
    s3_health_check

    export PORT=9000
    export PG_CONNECTION_STRING=postgresql://tarpisto:Su5hgVvoqUCRw5vrWmrW@$(docker-compose port db 5432)/tarpisto
    export COOKIE_SECRET="catlike-meringue-tying-PASTERN-bed-simply"

    export USER_SERVICE_SERVICE_ID=11188b9c-9534-4faf-8355-60973b720647
    export USER_SERVICE_URL=http://127.0.0.1:8080

    export AWS_REGION=eu-west-1
    export AWS_ACCESS_KEY_ID=minioadmin
    export AWS_SECRET_ACCESS_KEY=minioadmin

    export AWS_S3_ENDPOINT=http://$(docker-compose port s3 9000)
    export AWS_S3_FORCE_PATH_STYLE=true
    export AWS_S3_BUCKET_ID=exam-archive-local

    export NODE_ENV=development

    npm run db:migrate
    npm run next:dev

    popd
}

main "$@"