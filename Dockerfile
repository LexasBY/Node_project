FROM node:14-alpine
WORKDIR /src
COPY package*.json ./
RUN npm ci
COPY . .
CMD ["npm", "run", "start"]
