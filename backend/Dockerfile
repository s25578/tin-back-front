FROM node:21

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

#CMD ["node", "src/initializeDb.js"]
#CMD ["node", "src/seeders/symbolsSeeder.js"]
#CMD ["node", "src/seeders/predictionsSeeder.js"]

CMD ["npm", "run", "start"]