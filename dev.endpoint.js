module.exports = () => ({
  nasaDomain: {
    devProxyPath: 'proxy_api',
    destination: 'https://api.nasa.gov',
  },
  fakeDomain: {
    devProxyPath: 'proxy_api',
    destination: 'https://fakestoreapi.com',
  },
});
