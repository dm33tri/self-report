#!/bin/bash

echo "Environment: $ENV"
set -a
source /app/django_config
python /app/wait_for_postgres.py
python /app/manage.py migrate

if [ "$ENV" = "dev" ]; then
  python /app/create_superuser.py
  exec python /app/manage.py runserver 0.0.0.0:8000
fi
