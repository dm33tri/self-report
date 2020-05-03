#!/usr/bin/env python

import os

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')

import django
django.setup()

from django.contrib.auth.models import User

if not User.objects.filter(username='admin').exists():
    print('Creating superuser admin:admin')
    User.objects.create_superuser(username='admin', password='admin', email='admin@admin.ru')
