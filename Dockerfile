FROM node:12-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ENV NPM_CONFIG_LOGLEVEL warn

EXPOSE 80

CMD [ "npm", "start" ]
