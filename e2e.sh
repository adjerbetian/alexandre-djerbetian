#!/usr/bin/env bash
set -e

build() {
    compose build
}
up() {
    compose up
}
run() {
    compose "run e2e 'npx cypress run'"
    #compose "run -e CYPRESS_RECORD_KEY e2e 'npx cypress run --record true'"
}
stop() {
    compose stop
}
compose() {
    command=$1
    # We need the project name here otherwise the container names conflict with the regular configuration
    docker-compose \
        --project-name e2e \
        -f docker-compose.yml \
        -f docker-compose.prod.yml \
        -f docker-compose.e2e.yml \
        ${command}
}


case "$1" in
    build )  build;;
    up )     up;;
    run )    run;;
    stop )   stop;;
esac
