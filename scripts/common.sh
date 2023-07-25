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
    until docker-compose exec db pg_isready -U tarpisto &>/dev/null; do
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