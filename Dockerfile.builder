FROM node:12

WORKDIR /app
COPY package.json package-lock.json lerna.json tsconfig.json ./
RUN npm ci

COPY packages packages
RUN npm run mono:ci && npm run compile
