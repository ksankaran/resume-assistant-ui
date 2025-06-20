# get production image
FROM node:22-alpine

RUN npm install -g pnpm

WORKDIR /app

COPY . /app/

RUN pnpm install

RUN pnpm build

EXPOSE 3000

CMD [ "pnpm", "start" ]
