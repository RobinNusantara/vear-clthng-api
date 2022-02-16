FROM node:14-alpine

WORKDIR /app

COPY package*.json ./
COPY prisma.sh ./
COPY webpack.config.js ./

RUN npm ci

COPY . .

ENV NODE_ENV=production
ENV PORT=5000

RUN chmod +x prisma.sh
RUN ./prisma.sh

RUN npm run build

EXPOSE 5000

CMD [ "npm", "start" ]
