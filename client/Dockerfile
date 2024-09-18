FROM node

WORKDIR /app

COPY package*.json ./

RUN rm -rf node_modules && npm install -g npm@latest && npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start" ]
