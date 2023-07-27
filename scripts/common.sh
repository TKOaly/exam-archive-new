#!/usr/bin/env bash
readonly repo="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && cd .. && pwd)"
COMPOSE_PROJECT_NAME=${COMPOSE_PROJECT_NAME:-"exam-archive-new"}

function check_node_version() {
    pushd "$repository"
    echo "::debug::Setting up right Node version"

    # This will use always repo provided nvm if nvm is not in PATH etc.
    export NVM_DIR="${NVM_DIR:-$HOME/.nvm}"
    source "./scripts/nvm.sh"
    nvm use || nvm install

    popd
}

function required_command() {
    if ! command -v $1 &> /dev/null
    then
        echo "$1 could not be found"
        exit
    fi
}

function docker_health_check() {
    required_command docker

    if ! docker ps &> /dev/null
    then
        exit
    fi
}

function npm_ci() {
    pushd "$repository"
    echo "::debug::Installing dependencies with npm ci"

    required_command shasum

    # check if shashum is same, do not run npm ci
    if shasum -c "node_modules/package-lock.json.sha1" &> /dev/null
    then
        echo "package-lock.json has not changed, no need for npm ci"
    else
        echo "package-lock.json has changed, running npm ci"
        npm ci
        shasum "package-lock.json" > "node_modules/package-lock.json.sha1"
    fi

    popd
}

function db_health_check() {
    pushd "$repository"

    required_command docker
    required_command docker-compose

    echo "::debug::Database health check in $COMPOSE_PROJECT_NAME"
    COUNTER=0
    until docker-compose exec -t db pg_isready -U tarpisto &>/dev/null; do
        echo "Waiting for database to be healthy. Trying again in 5 seconds."

        COUNTER=$((COUNTER+1))

        if [ $COUNTER -gt 10 ]
        then
            echo "::error title={"DB Health check"}::Database not responding after 10 tries. Exiting."
            exit 1
        fi

        sleep 5;
    done

    popd
}

function s3_health_check() {
    pushd "$repository"

    required_command curl
    required_command docker
    required_command docker-compose

    echo "::debug::S3 health check in $COMPOSE_PROJECT_NAME"
    COUNTER=0
    until curl -I "http://$(docker-compose port s3 9000)/minio/health/live" &>/dev/null; do
        echo "Waiting for s3 to be healthy. Trying again in 5 seconds."

        COUNTER=$((COUNTER+1))

        if [ $COUNTER -gt 10 ]
        then
            echo "::error title={"S3 Health check"}::Database not responding after 10 tries. Exiting."
            exit 1
        fi

        sleep 5;
    done

    popd
}

function build_app() {
    echo "::group::Building application"

    required_command npm
    required_command docker

    export PORT=${PORT:-"9010"}
    export PG_CONNECTION_STRING=${PG_CONNECTION_STRING:-"postgresql://tarpisto:tarpisto@$(docker-compose port db 5432)/tarpisto"}

    export COOKIE_NAME=${COOKIE_NAME:-"tarpisto"}
    export COOKIE_SECRET=${COOKIE_SECRET:-"catlike-meringue-tying-PASTERN-bed-simply"}
    export COOKIE_ISSUER=${COOKIE_ISSUER:-"tkoaly"}
    export COOKIE_SUBJECT=${COOKIE_SUBJECT:-"tarpisto"}
    export COOKIE_JWTID=${COOKIE_JWTID:-"tarpisto"}

    export USER_SERVICE_SERVICE_ID=${USER_SERVICE_SERVICE_ID:-"11188b9c-9534-4faf-8355-60973b720647"}
    export USER_SERVICE_URL=${USER_SERVICE_URL:-"http://127.0.0.1:8080"}

    export AWS_REGION=${AWS_REGION:-"eu-west-1"}
    export AWS_ACCESS_KEY_ID=${AWS_ACCESS_KEY_ID:-"tarpisto"}
    export AWS_SECRET_ACCESS_KEY=${AWS_SECRET_ACCESS_KEY:-"tarpisto"}

    export AWS_S3_ENDPOINT=${AWS_S3_ENDPOINT:-"http://$(docker-compose port s3 9000)"}
    export AWS_S3_FORCE_PATH_STYLE=${AWS_S3_FORCE_PATH_STYLE:-true}
    export AWS_S3_BUCKET_ID=${AWS_S3_BUCKET_ID:-"exam-archive-local"}

    export NODE_ENV=${NODE_ENV:-"production"}
    export APP_ENV=${APP_ENV:-"development"}

    echo "::debug::Running database migrations"
    npm run db:migrate
    echo "::debug::Building application"
    npm run build
    echo "::endgroup::"
}

function build_docker_image() {
    required_command docker

    build_app

    export PROGRESS_NO_TRUNC=1
    docker build --progress=plain --no-cache -t ${DOCKER_TAGS} -l ${DOCKER_LABELS} $repository
}