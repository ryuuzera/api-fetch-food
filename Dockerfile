FROM node:18

RUN npm install -g yarn

WORKDIR /usr/projects/api-fetch-food

COPY package.json yarn.lock ./

RUN yarn 

COPY . .

EXPOSE 3005

CMD ["yarn", "start"]