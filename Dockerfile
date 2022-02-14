FROM node:10.16.1-alpine

# Create app directory
RUN mkdir /app
COPY . /app/
WORKDIR /app

RUN yarn install  --silent
RUN yarn build  --silent

CMD [ "node", "server.ts" ]

# Expose PORT 3000 on our virtual machine so we can run our server
EXPOSE 3000