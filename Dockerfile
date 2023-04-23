FROM node:17.9.1

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production --silent && mv node_modules ../

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]
