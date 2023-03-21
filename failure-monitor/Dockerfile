FROM node:18-alpine

WORKDIR /usr/src/api

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 3001

CMD ["yarn", "start"]