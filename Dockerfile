FROM node:16.17-alpine
WORKDIR /app
COPY package.json ./
COPY tsconfig.json ./
COPY . .
RUN npm install -g npm@8.19.2
RUN npm install --force
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]
