
# base image
# https://github.com/Zenika/alpine-chrome
FROM zenika/alpine-chrome:with-chromedriver
# :97-with-node-14

USER root
# RUN apk add --no-cache chromium-chromedriver
RUN apk add --no-cache tini make gcc g++ python3 nodejs nodejs-npm
USER chrome

# set working directory
WORKDIR /app

# COPY all to root
COPY ./test/ui5-async.test.js ui5-async.test.js
COPY ./package.json package.json
COPY ./test/wdio-ui5-docker.conf.js wdio-ui5-docker.conf.js

RUN npm install

# RUN chromedriver --whitelisted-ips
# ENTRYPOINT ["chromedriver","--whitelisted-ips"]

CMD npm run test:docker
