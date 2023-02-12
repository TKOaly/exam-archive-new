#!/usr/bin/env bash
readonly repo="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && cd .. && pwd)"

function check_node_version() {
    pushd "$repository"

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

    required_command shasum

    # check if shashum is same, do not run npm ci
    if shasum -c "node_modules/.package-lock.json.sha1" &> /dev/null
    then
        echo "package-lock.json has not changed, no need for npm ci"
    else
        echo "package-lock.json has changed, running npm ci"
        npm ci
        shasum "node_modules/.package-lock.json" > "node_modules/.package-lock.json.sha1"
    fi

    popd
}