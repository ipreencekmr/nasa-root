import { fromJS } from 'immutable';
import { getAppDomain, appDomainSelector } from '../../src/selectors/getAppDomain';

describe('getAppDomain', () => {
  const mockState = fromJS({
    browser: {
      location: {
        origin: 'mockAppDomain',
      },
    },
  });

  it('should return correct domain map', () => {
    const domainMap = getAppDomain.resultFunc(mockState);
    expect(domainMap.getIn(['browser', 'location', 'origin'])).toEqual('mockAppDomain');
  });

  it('should return correct domain selector', () => {
    const appDomain = appDomainSelector(mockState);
    expect(appDomain).toEqual('mockAppDomain');
  });
});
