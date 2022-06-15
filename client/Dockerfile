FROM node:alpine
WORKDIR /usr/src/client
COPY package.json /usr/src/client
COPY yarn.lock /usr/src/client/
RUN yarn install
COPY . /usr/src/client/
CMD ["yarn", "run start"]