FROM node:14-alpine

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=5000

COPY package*.json ./
COPY prisma.sh ./
COPY webpack.config.js ./

RUN npm ci

COPY . .

RUN chmod +x prisma.sh
RUN ./prisma.sh

RUN npm run build

EXPOSE 5000

CMD [ "npm", "start" ]
