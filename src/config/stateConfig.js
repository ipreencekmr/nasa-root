const NASA_DOMAIN = 'nasaDomain';
const APOD_URI = 'apodUri';
const NEO_URI = 'neoUri';
const MRO_URI = 'mroUri';
const DONKI_URI = 'donkiUri';

const stateConfig = {
  [NASA_DOMAIN]: {
    client: {
      e1: 'https://api.nasa.gov',
      e2: 'https://api.nasa.gov',
      e3: 'https://api.nasa.gov',
    },
    server: {
      e1: 'https://api.nasa.gov',
      e2: 'https://api.nasa.gov',
      e3: 'https://api.nasa.gov',
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
    client: 'DONKI/notifications',
    server: 'DONKI/notifications',
  },
};

export default stateConfig;
