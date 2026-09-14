FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

# Next.js 開発サーバー起動
CMD ["npm", "run", "dev"]