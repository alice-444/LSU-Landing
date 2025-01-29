FROM node:20.18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN mkdir -p /app/.next && chown -R node:node /app

USER node

EXPOSE 3000

CMD ["npm", "run", "dev"]