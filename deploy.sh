#!/usr/bin/env bash
set -e

USER=djerbeti
IP=world-312.fr.planethoster.net
HOST="${USER}@${IP}"

syncAllDist() {
    sync micro
    sync entities
    sync db
    sync server
    sync client
}
syncDist() {
    sync "packages/$1/dist"
}
sync() {
    folder=$1
    rsync -avz --delete --copy-links -e "ssh -p 5022" "${folder}/" "${HOST}:sites/alexandre/${folder}"
}

buildClient() {
    yarn bootstrap
    (cd packages/client && NODE_ENV=prod;VUE_APP_SERVER=https://api.djerbetian.com npm run build)
}

pullInstallOnServer() {
    ssh -p 5022 "${HOST}" << INSTALL
        source /home/djerbeti/nodevenv/sites/alexandre/10/bin/activate
        cd /home/djerbeti/sites/alexandre
        git checkout master
        git pull
        npx yarn install --frozen-lockfile --silent
INSTALL
}

restart() {
    ssh -p 5022 "${HOST}" << RESTART
        touch /home/djerbeti/sites/alexandre/tmp/restart.txt
RESTART
}

# ---------------------------------------------

buildClient
pullInstallOnServer
syncAllDist
restart
