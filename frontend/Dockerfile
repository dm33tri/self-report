FROM node:12.16.3

ARG ENV
ENV APP_HOME /src
RUN mkdir $APP_HOME
WORKDIR $APP_HOME

CMD ["/bin/bash", "./shell_scripts/run_dev.sh"]

EXPOSE 3000
