FROM node:18-alpine

WORKDIR /usr/src/api

COPY package*.json ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]