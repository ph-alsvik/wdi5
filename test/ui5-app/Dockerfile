# base image
FROM node:12-alpine3.11

RUN apk update \
    && apk upgrade

# set working directory
WORKDIR /app

# COPY . .
COPY webapp webapp
COPY package.json package.json

RUN npm install

EXPOSE 8888

# CMD npm run start:mock
CMD npm start
