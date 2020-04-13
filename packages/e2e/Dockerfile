FROM cypress/included:4.3.0

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

RUN npx cypress verify
