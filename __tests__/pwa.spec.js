import pwa from '../src/config/pwa';

describe('pwa', () => {
  it('shoule be valid json object', () => {
    expect(pwa).toBeInstanceOf(Object);
  });

  it('should have webManifest', () => {
    const manifestFn = pwa.webManifest;
    const manifestObj = manifestFn();
    expect(manifestObj).toBeInstanceOf(Object);
  });
});
