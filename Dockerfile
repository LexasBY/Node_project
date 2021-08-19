FROM node:14-alpine
WORKDIR /src
COPY package*.json ./
RUN apk upgrade && apk add openssl
RUN npm ci
COPY . .
CMD ["npm", "run", "start"]
