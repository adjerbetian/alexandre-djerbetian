#!/usr/bin/env bash

command=$1
options="$2 $3 $4 $5"

blue="\\\\033[34m"
bold="\\\\033[1m"
reset="\\\\033[0m"

printFolderCMD="echo ${blue}${bold}\$(basename \$(pwd))${reset}"

lerna exec ${options} -- "${printFolderCMD} && ${command}"
