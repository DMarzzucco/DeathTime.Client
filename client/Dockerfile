FROM node
WORKDIR /app
COPY package*.json ./
RUN rm -rf node_modules && npm install --include=dev
RUN npx vite 
COPY . .
# RUN npm run build
EXPOSE 5173
CMD [ "npm", "run", "dev" ]
# CMD [ "npm", "run", "preview" ]