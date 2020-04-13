FROM cypress/included:4.3.0

WORKDIR /app

COPY package.json .
COPY package-lock.json .

#ENV CI=1
RUN npm ci

COPY . .

RUN npx cypress verify
