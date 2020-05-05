#!/bin/bash

docker-compose run backend /app/manage.py makemigrations "$@"
