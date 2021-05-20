FROM node:14 as base

WORKDIR /mio

COPY package*.json ./

RUN npm i

COPY . .

CMD [ "nodemon", "app.ts" ]

FROM base as production

ENV NODE_PATH=./build

RUN npm run build