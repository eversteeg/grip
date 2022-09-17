FROM node:16 as builder

RUN mkdir -p /usr/src/app
COPY src /usr/src/app/src/
COPY package*.json /usr/src/app/
COPY public /usr/src/app/public
COPY config /usr/src/app/config
COPY tsconfig.json /usr/src/app/
COPY index.html /usr/src/app/
COPY vite.config.js /usr/src/app/
COPY .env /usr/src/app
COPY .eslint* /usr/src/app/
COPY .style* /usr/src/app/
WORKDIR /usr/src/app
RUN npm install --legacy-peer-deps && npm run-script build:prod

FROM nginx:1.16
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /usr/src/app/dist/. /usr/share/nginx/html/

COPY entrypoint.sh /entrypoint.sh

CMD ["nginx", "-g", "daemon off;"]
ENTRYPOINT ["/entrypoint.sh"]
