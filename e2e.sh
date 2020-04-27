#!/usr/bin/env bash

build() {
    compose build
}
up() {
    compose "up -d"
}
run() {
    compose "run e2e 'npx cypress run'"
}
stop() {
    compose "stop"
}
compose() {
    command=$1
    docker-compose -f docker-compose.prod.yml -f docker-compose.e2e.yml ${command}
}


case "$1" in
    build )  build;;
    up )     up;;
    run )    run;;
    stop )   stop;;
esac
