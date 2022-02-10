FROM node:14-alpine

# Create app directory
RUN mkdir /app

# Copy all files to app directory
ADD . /app

# Use app directory
WORKDIR /app

# Install Dependencies
RUN npm install

# Build application
RUN npm run build

# Migrate database
RUN npx prisma db push

# Generate prisma client
RUN npx prisma generate

# Start application
RUN npm start
