#!/usr/bin/env bash
set -o errexit -o nounset -o pipefail

readonly repository="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd)"
source "$repository/scripts/common.sh"

function stop() {
  pushd "$repository"
  required_command docker
  docker-compose down || true
  popd
}
trap stop EXIT

check_node_version

required_command tmux
docker_health_check
npm_ci

function main() {
    pushd "$repository"

    session="exam-archive"

    tmux kill-session -t $session || true
    tmux start-server
    tmux new-session -d -s $session

    tmux splitw -h
    tmux splitw -v

    tmux select-pane -t 0
    tmux send-keys "./scripts/start-server.sh" C-m
    tmux select-pane -t 0 -T "next dev"

    tmux select-pane -t 1
    tmux send-keys "npm run watch:scss" C-m
    tmux select-pane -t 1 -T "scss watch"

    tmux select-pane -t 2
    tmux send-keys "docker-compose up" C-m
    tmux select-pane -t 2 -T "db & s3 logs"

    tmux select-pane -t 0
    tmux set pane-border-status top
    tmux attach-session -t $session
    popd
}

main "$@"

