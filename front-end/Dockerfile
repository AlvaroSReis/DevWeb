FROM node:18.15.0 AS Production

#ENV NODE_ENV=production

WORKDIR /usr/src/front-end

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . ./usr/src/front-end

RUN npm run build

#CMD ["sh", "-c", "npm start"]
CMD ["npm start"]