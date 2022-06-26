FROM node:alpine
WORKDIR /usr/src/client
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
COPY . .
CMD ["yarn", "dev"]