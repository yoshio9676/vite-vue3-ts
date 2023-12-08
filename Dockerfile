FROM node:21.4.0-alpine
WORKDIR /app
COPY vite-vue-ts/ ./
RUN apk update
CMD [ "yarn", "dev" ]