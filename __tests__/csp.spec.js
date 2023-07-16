import csp from '../src/config/csp';

describe('csp', () => {
  it('shoule be valid string object', () => {
    expect(typeof csp).toBe('string');
  });

  it('shoule be matching snapshot', () => {
    jest.resetModules();
    process.env.ONE_CLIENT_REPORTING_URL = 'example.com';
    expect(csp).toBe("report-uri; default-src 'self' nasa-mfa-reports.s3.amazonaws.com nasa-mfa.s3.amazonaws.com; script-src 'self' *.vercel.app nasa-mfa-reports.s3.amazonaws.com nasa-mfa.s3.amazonaws.com *.learn-coding.xyz 52.90.110.6; img-src 'self' *.nasa.gov *.icons8.com data: https:; style-src 'self' 'unsafe-inline'; connect-src 'self' *.nasa.gov fakestoreapi.com *.vercel.app *.learn-coding.xyz");
  });
});
