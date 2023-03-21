FROM node:18-alpine

WORKDIR /usr/src/api

COPY package*.json ./

RUN yarn install

EXPOSE 3000

COPY . .

CMD [ "yarn", "start" ]