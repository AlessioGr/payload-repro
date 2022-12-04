FROM node:18.12.1-alpine AS builder
# If problems with sharp not found: alpine here doesn't seem to contain sharp. Fix: install build-base package

ARG SERVER_URL

RUN mkdir -p /app
WORKDIR /app

COPY package.json  .
COPY yarn.lock .

RUN apk add git

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000
CMD [ "yarn", "run", "serve" ]
