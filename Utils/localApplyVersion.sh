#!/bin/bash

export PLUGIN_NAME="videos"
export PLUGIN_NAME_UP="VIDEOS"

for VERSION in "$@"

do

./Utils/applyVersion.sh ${VERSION}

done
