#!/usr/bin/env bash

if [ "$ENV" = "dev" ]; then
    if [ "package.json" -nt ".package.json" ]; then
	echo "Running npm install"
	npm install
	touch .package.json
    fi
  echo "Starting dev server"
  exec npm run dev
fi
