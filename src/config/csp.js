import contentSecurityPolicyBuilder from 'content-security-policy-builder';

// Read about csp:
// https://github.com/americanexpress/one-app/blob/main/docs/api/modules/App-Configuration.md#csp
export default contentSecurityPolicyBuilder({
  directives: {
    reportUri: process.env.ONE_CLIENT_CSP_REPORTING_URL,
    defaultSrc: [
      "'self'",
      'http://nasa-mfa.us-east-1.elasticbeanstalk.com',
      'nasa-mfa-reports.s3.amazonaws.com',
      'nasa-mfa.s3.amazonaws.com',
    ],
    scriptSrc: [
      "'self'",
      '*.vercel.app',
      'nasa-mfa.us-east-1.elasticbeanstalk.com',
      'nasa-mfa-reports.s3.amazonaws.com',
      'nasa-mfa.s3.amazonaws.com',
      '*.elasticbeanstalk.com',
    ],
    imgSrc: [
      "'self'",
      '*.nasa.gov',
      '*.icons8.com',
      'data: https:',
    ],
    styleSrc: [
      "'self'",
      "'unsafe-inline'",
    ],
    connectSrc: [
      "'self'",
      '*.nasa.gov',
      'fakestoreapi.com',
      '*.vercel.app',
    ],
  },
});
