#!/usr/bin/env bash
set -e

script=$1
options="$2 $3 $4 $5"

./monoExec.sh "npm run --if-present ${script}" ${options}
