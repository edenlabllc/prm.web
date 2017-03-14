FROM node:alpine

EXPOSE 8080

ENV PORT 8080
ENV NODE_ENV production

RUN apk add --no-cache git

RUN npm i -g pm2 --quiet

ADD package.json /tmp/package.json
RUN cd /tmp && npm install --production --quiet && mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/

WORKDIR /opt/app

ADD . /opt/app

RUN npm run build

RUN rm -rf ./app/client \
	rm -rf ./app/common \
	rm -rf ./node_modules/webpack

# Clear deps and caches
RUN apk --purge del git && rm -rf /var/cache/apk/*

CMD pm2 start --no-daemon static/server.js
