FROM ianwalter/puppeteer:latest

RUN  apt-get update \
    && apt-get install -y google-chrome-stable --no-install-recommends

WORKDIR /app

# COPY all to root
COPY ./test/ui5-async.test.js ui5-async.test.js
COPY ./test/_selectorList.js _selectorList.js
COPY ./package.json package.json
COPY ./test/wdio-ui5-docker.conf.js wdio-ui5-docker.conf.js

RUN npm install

CMD npm run test:docker
