FROM node:16.15.0-alpine as buildStage
ENV INSTALL_PATH /usr/src/app

WORKDIR $INSTALL_PATH

COPY . .

RUN npm i

ENTRYPOINT [ "node", "app.js" ]