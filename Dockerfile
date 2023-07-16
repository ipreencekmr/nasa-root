FROM node:16.20.1-alpine

RUN mkdir /nasa-mfa

ENV NODE_ENV development

WORKDIR /nasa-mfa

USER root

COPY ./package.json /nasa-mfa/
COPY ./.babelrc /nasa-mfa/
COPY ./webpack.config.js /nasa-mfa/
COPY ./dev.middleware.js /nasa-mfa/
COPY ./dev.endpoint.js /nasa-mfa/
COPY ./src/ /nasa-mfa/src/

RUN npm install -f

EXPOSE 3000

CMD ["npm", "run", "start"]