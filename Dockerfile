FROM node:16.20.1-alpine

RUN mkdir /nasa-mfa

WORKDIR /nasa-mfa

USER node

COPY ./package.json /nasa-mfa

RUN npm install -f

COPY . .

EXPOSE 3000

CMD ["npm", "start"]