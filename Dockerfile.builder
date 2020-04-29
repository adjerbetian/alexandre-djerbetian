FROM node:12

WORKDIR /app
COPY package.json package-lock.json lerna.json tsconfig.base.json ./
RUN npm ci

COPY packages packages
RUN npm run mono:ci && npm run compile
