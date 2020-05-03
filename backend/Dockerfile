FROM python:3.7.2-stretch
# TODO alpine?
ENV PYTHONUNBUFFERED=1
COPY requirements*.txt /
RUN pip install -r /requirements.txt
# TODO do not run it in production
RUN pip install -r /requirements_dev.txt
VOLUME /app
VOLUME /logs
WORKDIR /app
COPY shell_scripts/run.sh /run.sh
CMD ["/bin/bash", "/run.sh"]
