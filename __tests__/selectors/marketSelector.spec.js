import { fromJS } from 'immutable';
import {
  localeSelector, languageDataSelector, getLocaleSelector, getLanguageDataSelector,
} from '../../src/selectors/marketSelector';

describe('marketSelector', () => {
  const mockState = fromJS({
    intl: {
      activeLocale: 'mockLocale',
      languagePacks: {
        mockLocale: {
          mockModule: {
            data: { mockKey: 'mockValue' },
          },
        },
      },
    },
  });

  it('should return correct locale map', () => {
    const localeMap = getLocaleSelector.resultFunc(mockState);
    expect(localeSelector(localeMap)).toBe('mockLocale');
  });

  it('should return correct language data map', () => {
    const langDataMap = getLanguageDataSelector.resultFunc(mockState);
    expect(typeof langDataMap).toEqual('object');
  });

  it('should return correct localeSelector', () => {
    const activeLocale = localeSelector(mockState);
    expect(activeLocale).toBe('mockLocale');
  });

  it('should return correct languageDataSelector', () => {
    const langData = languageDataSelector(mockState, 'mockLocale', 'mockModule');
    expect(typeof langData).toEqual('object');
    expect(langData.getIn(['data', 'mockKey'])).toBe('mockValue');
  });
});
