FROM node:18

WORKDIR /app
COPY packages/entities/package.json packages/entities/
COPY packages/micro/package.json packages/micro/
COPY packages/db/package.json packages/db/
COPY packages/server/package.json packages/server/
COPY packages/client/package.json packages/client/
COPY packages/e2e/package.json packages/e2e/
COPY package.json package-lock.json ./
RUN npm ci

COPY lerna.json tsconfig.build.json tsconfig.base.json monoExec.sh monoRun.sh ./
COPY overrides overrides
COPY packages packages
RUN npm run compile
