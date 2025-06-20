# get production image
FROM node:22-alpine

RUN npm install -g pnpm

WORKDIR /app

RUN pnpm install

RUN pnpm build

COPY . /app/

EXPOSE 3000

CMD [ "pnpm", "start" ]
