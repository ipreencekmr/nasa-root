import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { fromJS } from 'immutable';
import ModuleRoute from 'holocron-module-route';
import childRoutes from '../../src/childRoutes';
import {
  NasaRoot, mapDispatchToProps, mapStateToProps, loadModuleData,
} from '../../src/components/NasaRoot';

jest.mock('@americanexpress/one-app-ducks', () => ({
  updateLocale: (input) => `Switching locale to ${input}`,
  loadLanguagePack: (moduleName, { fallbackLocale } = {}) => `I am loading the language pack for ${moduleName} and my fallback locale is ${fallbackLocale}`,
}));

jest.mock('../../src/selectors/marketSelector', () => ({
  getLanguageDataSelector: jest.fn(() => ({
    locale: 'en-US',
    title: 'Mock Title',
  })),
  getLocaleSelector: jest.fn(() => 'en-US'),
}));

describe('NasaRoot should render as expected', () => {
  let props;

  beforeEach(() => {
    props = {
      switchLanguage: jest.fn(),
      languageData: {
        locale: 'en-US',
        title: 'Mock Title',
      },
      localeName: 'en-US',
      params: {
        locale: 'en-US',
      },
      children: 'Mock Children',
    };
    const useEffectSpy = jest.spyOn(React, 'useEffect');
    useEffectSpy.mockImplementation((f) => f());
  });

  it('module should render correct JSX', () => {
    const renderedModule = shallow(<NasaRoot {...props} />);
    expect(renderedModule).toMatchSnapshot();
  });

  it('does not render when language data does not exist', () => {
    const renderedModule = shallow(<NasaRoot {...{ ...props, languageData: {}, params: {} }} />);
    expect(toJson(renderedModule)).toBe('');
  });

  describe('childRoutes', () => {
    it('should return an array of Routes', () => {
      expect(childRoutes()).toEqual(expect.any(Array));
      childRoutes().forEach((route) => expect(route.type).toEqual(ModuleRoute));
    });
  });

  describe('mapStateToProps', () => {
    it('should return the locale name', () => {
      const mockState = fromJS({
        intl: { activeLocale: 'en-US' },
      });
      expect(mapStateToProps(mockState)).toMatchObject({
        localeName: 'en-US',
      });
    });
    it('should return an empty object for languageData if there is no language data available', () => {
      const mockStateWithNoLanguagePack = fromJS({
        intl: { activeLocale: 'en-US' },
      });
      const mockStateWithIncompleteLanguagePack = fromJS({
        intl: {
          activeLocale: 'en-US',
          languagePacks: {
            'en-US': {
              'nasa-root': {
                greeting: 'hello',
              },
            },
          },
        },
      });
      expect(mapStateToProps(mockStateWithNoLanguagePack)).toMatchObject({
        localeName: 'en-US',
        languageData: {},
      });
      expect(mapStateToProps(mockStateWithIncompleteLanguagePack)).toMatchObject({
        localeName: 'en-US',
        languageData: {},
      });
    });
    it('should return languageData if it is available', () => {
      const mockState = fromJS({
        intl: {
          activeLocale: 'en-US',
          languagePacks: {
            'en-US': {
              'nasa-root': {
                data: {
                  title: 'Mock Title',
                },
              },
            },
          },
        },
      });
      expect(mapStateToProps(mockState)).toMatchObject({
        localeName: 'en-US',
        languageData: {
          title: 'Mock Title',
        },
      });
    });
  });

  describe('mapDispatchToProps', () => {
    it('should update the browser locale and then reload the language pack', async () => {
      const mockDispatch = jest.fn();
      const { switchLanguage } = mapDispatchToProps(mockDispatch);
      await switchLanguage('en-US');
      expect(mockDispatch).toHaveBeenNthCalledWith(1, 'Switching locale to en-US');
      expect(mockDispatch).toHaveBeenNthCalledWith(2, 'I am loading the language pack for nasa-root and my fallback locale is en-US');
    });
  });

  describe('loadModuleData', () => {
    const fakeStore = {
      dispatch: jest.fn((x) => x),
    };
    it('should load language pack for nasa-root module', async () => {
      await loadModuleData({ store: fakeStore });
      expect(fakeStore.dispatch).toHaveBeenCalledWith('I am loading the language pack for nasa-root and my fallback locale is en-US');
    });
  });
});
