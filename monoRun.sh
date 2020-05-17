#!/usr/bin/env bash
set -e

script=$1
options="$2 $3 $4 $5"

blue="\\033[34m"
purple="\\033[35m"
bold="\\033[1m"
reset="\\033[0m"

printFolderCMD="echo -e \\${blue}\\${bold}\$(basename \$(pwd))\\${reset}"

echo -e "${bold}${purple}${script}${reset}"
lerna exec --loglevel silent ${options} -- "${printFolderCMD} && ((yarn run --non-interactive | grep -q ${script}) && yarn ${script} || echo 'no script ${script}')"
