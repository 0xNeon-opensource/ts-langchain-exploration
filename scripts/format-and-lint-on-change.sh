#!/bin/sh

concurrently --restart-tries 10 --raw "onchange '**/*' --exclude '**/node_modules/**' --exclude '**/.next/**' --exclude '**/public/**' -- prettier --write {{file}}" "onchange '**/*' --exclude '**/node_modules/**' --exclude '**/.next/**' --exclude '**/public/**' -- yarn lint"
