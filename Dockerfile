FROM node:14.15.4-alpine3.12

RUN apk add chromium

WORKDIR /app

COPY package.json /app/

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

RUN npm install

COPY . /app/

CMD ["npm", "start"]
