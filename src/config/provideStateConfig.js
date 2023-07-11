const NASA_DOMAIN = 'nasaDomain';
const APP_DOMAIN = 'appDomain';
const APOD_URI = 'apodUri';
const NEO_URI = 'neoUri';
const MRO_URI = 'mroUri';
const DONKI_URI = 'donkiUri';
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
  [APP_DOMAIN]: {
    client: {
      development: 'http://localhost:3000',
      qa: '',
      production: '',
    },
    server: {
      development: 'http://localhost:3000',
      qa: '',
      production: '',
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
  [API_KEY]: {
    client: 'Vv0TXGbYxieYxAIb0NfziTHJssra0FHhF8cn6DD9',
    server: 'Vv0TXGbYxieYxAIb0NfziTHJssra0FHhF8cn6DD9',
  },
};

export default stateConfig;
