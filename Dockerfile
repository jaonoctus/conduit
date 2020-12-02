FROM node:12-alpine

RUN apk add yarn git

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn

COPY . ./
COPY .env.example .env

EXPOSE 3333

CMD [ "yarn", "start" ]
