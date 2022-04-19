FROM node:14-alpine

WORKDIR /app

COPY package*.json ./
COPY webpack.config.js ./
COPY sequelize.sh ./

RUN npm ci

COPY . .

ENV NODE_ENV=production
ENV PORT=5000

RUN npm run build

RUN chmod +x the_file_name

RUN ./sequelize.sh

EXPOSE 5000

CMD [ "npm", "start" ]
