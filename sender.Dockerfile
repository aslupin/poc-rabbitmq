FROM node:latest
WORKDIR /home/poc-rabbitmq
COPY . .
RUN npm install
CMD node sender.js
