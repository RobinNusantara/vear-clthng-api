FROM node:14-alpine

WORKDIR /app

COPY package*.json ./
COPY webpack.config.js ./

RUN npm ci

COPY . .

ENV NODE_ENV=production
ENV PORT=5000

RUN npm run build

EXPOSE 5000

CMD [ "npm", "start" ]
