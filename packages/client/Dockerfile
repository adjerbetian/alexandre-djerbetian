FROM node:12

RUN npm install -g http-server

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

RUN npm run build

EXPOSE 8080
CMD [ "http-server" , "dist", "--silent"]
