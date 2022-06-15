FROM node:alpine
WORKDIR /usr/src/server
COPY package.json /usr/src/server/
COPY yarn.lock /usr/src/server/
RUN yarn install
COPY . /usr/src/server/
CMD ["yarn", "start"]