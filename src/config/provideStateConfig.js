const NASA_DOMAIN = 'nasaDomain';
const FAKE_DOMAIN = 'fakeDomain';
const APOD_URI = 'apodUri';
const NEO_URI = 'neoUri';
const MRO_URI = 'mroUri';
const DONKI_URI = 'donkiUri';
const SIGNIN_URI = 'signinUri';
const SIGNUP_URI = 'signupUri';
const API_KEY = 'apiKey';

const stateConfig = {
  [NASA_DOMAIN]: {
    client: {
      development: 'https://api.nasa.gov',
      qa: 'https://api.nasa.gov',
      production: 'https://api.nasa.gov',
    },
    server: {
      development: 'https://api.nasa.gov',
      qa: 'https://api.nasa.gov',
      production: 'https://api.nasa.gov',
    },
  },
  [FAKE_DOMAIN]: {
    client: {
      development: 'https://fakestoreapi.com',
      qa: 'https://fakestoreapi.com',
      production: 'https://fakestoreapi.com',
    },
    server: {
      development: 'https://fakestoreapi.com',
      qa: 'https://fakestoreapi.com',
      production: 'https://fakestoreapi.com',
    },
  },
  [APOD_URI]: {
    client: '/planetary/apod',
    server: '/planetary/apod',
  },
  [NEO_URI]: {
    client: '/neo/rest/v1/feed',
    server: '/neo/rest/v1/feed',
  },
  [MRO_URI]: {
    client: '/mars-photos/api/v1/rovers/curiosity/photos',
    server: '/mars-photos/api/v1/rovers/curiosity/photos',
  },
  [DONKI_URI]: {
    client: '/DONKI/notifications',
    server: '/DONKI/notifications',
  },
  [SIGNIN_URI]: {
    client: '/auth/login',
    server: '/auth/login',
  },
  [SIGNUP_URI]: {
    client: '/users',
    server: '/users',
  },
  [API_KEY]: {
    client: 'Vv0TXGbYxieYxAIb0NfziTHJssra0FHhF8cn6DD9',
    server: 'Vv0TXGbYxieYxAIb0NfziTHJssra0FHhF8cn6DD9',
  },
};

export default stateConfig;
