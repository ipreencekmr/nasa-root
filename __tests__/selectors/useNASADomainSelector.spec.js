import { useSelector } from 'react-redux';
import { fromJS } from 'immutable';
import { useNasaDomain } from '../../src/selectors/useNASADomainSelector';

jest.mock('react-redux', () => {
  const originalModule = jest.requireActual('react-redux');

  return {
    __esModule: true,
    ...originalModule,
    useSelector: jest.fn(),
  };
});

describe('useNASADomainSelector', () => {
  it('should return correct domain', () => {
    const mockState = fromJS({
      config: {
        nasaDomain: 'mock domain',
      },
    });
    useSelector.mockImplementation((fn) => fn(mockState));
    const apiDomain = useNasaDomain();
    expect(apiDomain).toEqual('mock domain');
  });
});
