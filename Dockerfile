
FROM zenika/alpine-chrome
USER root

RUN apk update \
    && apk upgrade

RUN apk add --update docker openrc
RUN rc-update add docker boot
RUN apk add --no-cache docker-cli

# Install python/pip, node, npm
RUN apk add --no-cache tini make gcc g++ python3 git nodejs nodejs-npm yarn
RUN apk add --no-cache python2 g++ make nodejs nodejs-npm
RUN apk add --no-cache python2 g++ make

ENV PATH /app/node_modules/.bin:$PATH

# set working directory
WORKDIR /app

# COPY . .
COPY test/ui5-app/webapp webapp
COPY test/ui5-app/package.json package.json
COPY test/wdio-browser-docker.conf.js wdio-browser-docker.conf.js

RUN npm install

CMD npm run test
