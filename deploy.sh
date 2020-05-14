#!/usr/bin/env bash
set -e

sync() {
    from=$1
    to=$2

    rsync -avz --delete --copy-links -e "ssh -p 5022" "${from}" "${HOST}:sites/alexandre-new/${to}"
}

yarn compile
(cd packages/client && NODE_ENV=prod;VUE_APP_SERVER=https://api.djerbetian.com yarn build)

USER=djerbeti
IP=world-312.fr.planethoster.net
HOST="${USER}@${IP}"

sync "packages/client/dist/" "client"
sync "packages/server/dist/" "server/dist"
sync "packages/server/node_modules/" "server/node_modules"

restartPath="/home/djerbeti/sites/alexandre-new/server/dist/tmp/restart.txt"
ssh -p 5022 ${HOST} "mkdir -p \$(dirname ${restartPath}) touch ${restartPath}"
