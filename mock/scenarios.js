const DELAY = 3000;
const apodResponse = require('./apod.json');
const neoResponse = require('./neo.json');
const mroResponse = require('./mro.json');
const donkiResponse = require('./donki.json');
const loginResponse = require('./login.json');

module.exports = {
  success: [
    {
      request: '/proxy_api/planetary/apod',
      response: {
        contentType: 'application/json',
        status: 200,
        body: apodResponse,
      },
    },
    {
      request: '/proxy_api/neo/rest/v1/feed',
      response: {
        contentType: 'application/json',
        status: 200,
        body: neoResponse,
      },
    },
    {
      request: '/proxy_api/mars-photos/api/v1/rovers/curiosity/photos',
      response: {
        contentType: 'application/json',
        status: 200,
        body: mroResponse,
      },
    },
    {
      request: '/proxy_api/DONKI/notifications',
      response: {
        contentType: 'application/json',
        status: 200,
        body: donkiResponse,
      },
    },
    {
      request: { path: '/proxy_api/users', method: 'POST' },
      response: {
        contentType: 'application/json',
        status: 200,
        delay: DELAY,
        body: {
          id: 1,
        },
      },
    },
    {
      request: { path: '/proxy_api/auth/login', method: 'POST' },
      response: {
        contentType: 'application/json',
        status: 200,
        delay: DELAY,
        body: loginResponse,
      },
    },
  ],
};
