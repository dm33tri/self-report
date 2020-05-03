#!/usr/bin/env python

import psycopg2
import time
import sys


for i in range(30):
    try:
        psycopg2.connect('postgresql://user:password@db/selfreport')
    except psycopg2.Error:
        print('DB connection failed, waiting', flush=True)
        time.sleep(1)
    else:
        break
else:
    sys.exit(1)
