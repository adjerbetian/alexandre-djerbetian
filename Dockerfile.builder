FROM node:12

WORKDIR /app
COPY package.json yarn.lock ./
COPY packages/client/package.json packages/client/
COPY packages/db/package.json packages/db/
COPY packages/e2e/package.json packages/e2e/
COPY packages/entities/package.json packages/entities/
COPY packages/micro/package.json packages/micro/
COPY packages/server/package.json packages/server/
RUN yarn install --frozen-lockfile

COPY lerna.json tsconfig.build.json tsconfig.json monoExec.sh monoRun.sh ./
COPY overrides overrides
COPY packages packages
RUN yarn compile
