import AppConfig from '../src/config/appConfig';

describe('appConfig', () => {
  it('shoule be valid json object', () => {
    expect(AppConfig).toBeInstanceOf(Object);
    expect(Object.keys(AppConfig)).toHaveLength(3);
  });

  it('should contain csp', () => {
    expect(AppConfig.csp).toBeDefined();
    expect(AppConfig.provideStateConfig).toBeDefined();
    expect(AppConfig.pwa).toBeDefined();
    expect(typeof AppConfig.csp).toBe('string');
    expect(typeof AppConfig.provideStateConfig).toBe('object');
    expect(typeof AppConfig.pwa).toBe('object');
  });
});
