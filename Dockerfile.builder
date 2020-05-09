FROM node:12

WORKDIR /app
COPY package.json package-lock.json lerna.json tsconfig.build.json tsconfig.json monoExec.sh monoRun.sh ./
RUN npm ci

COPY packages/client/package.json packages/client/package-lock.json packages/client/
COPY packages/db/package.json packages/db/package-lock.json packages/db/
COPY packages/e2e/package.json packages/e2e/package-lock.json packages/e2e/
COPY packages/entities/package.json packages/entities/package-lock.json packages/entities/
COPY packages/micro/package.json packages/micro/package-lock.json packages/micro/
COPY packages/server/package.json packages/server/package-lock.json packages/server/
RUN npm run mono:ci

COPY packages packages
RUN npm run compile
