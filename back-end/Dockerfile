FROM node:18.15.0 AS Production

#ENV NODE_ENV=production

WORKDIR /usr/src/back-end

COPY package.json .
COPY package-lock.json .

RUN npm install

EXPOSE 8080

COPY . .

CMD ["sh", "-c", "npm start"]