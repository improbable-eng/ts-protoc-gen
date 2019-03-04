FROM node:11.8.0-stretch as build

WORKDIR /app

# Install dependecies
COPY .npmrc .
COPY package.json .
COPY package-lock.json .
RUN npm ci

COPY . .
RUN npm pack
