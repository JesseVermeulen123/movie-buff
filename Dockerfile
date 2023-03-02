FROM node:19

WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN set -ex; \
  npm install; \
  npm run build;