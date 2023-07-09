import React from 'react';
import PropTypes from 'prop-types';
import { loadLanguagePack, updateLocale } from '@americanexpress/one-app-ducks';
import { IntlProvider } from 'react-intl';
import { connect, useSelector } from 'react-redux';
import { fromJS } from 'immutable';
import { Helmet } from 'react-helmet';
import childRoutes from '../childRoutes';

export const NasaRoot = ({
  switchLanguage, languageData, params, localeName, children,
}) => {
  // naive solution - up to user on how to load in data

  const nasaDomain = useSelector((state) => state.getIn(['config', 'cspReportingUrl']));

  console.log(`cspReportingUrl domain: ${nasaDomain}`);

  React.useEffect(() => {
    if (params && params.locale) {
      const [language, country] = params.locale.split('-');
      const newLocale = `${language.toLowerCase()}-${country.toUpperCase()}`;
      switchLanguage(newLocale);
    }
  }, [params, switchLanguage]);

  if (languageData) {
    return (
      <IntlProvider locale={localeName} messages={languageData}>
        <Helmet>
          <htmlAttributes lang={localeName} />

          <title>{languageData.title}</title>

          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          />

        </Helmet>
        {children}
      </IntlProvider>
    );
  }
  return null;
};

// Read about childRoutes:
// https://github.com/americanexpress/one-app/blob/main/docs/api/modules/Routing.md#childroutes
NasaRoot.childRoutes = childRoutes;

// Read about appConfig:
// https://github.com/americanexpress/one-app/blob/main/docs/api/modules/App-Configuration.md
/* istanbul ignore next */
if (!global.BROWSER) {
  // eslint-disable-next-line global-require -- desc
  NasaRoot.appConfig = require('../config/appConfig').default;
}

NasaRoot.propTypes = {
  children: PropTypes.node.isRequired,
  languageData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    greeting: PropTypes.string.isRequired,
  }).isRequired,
  localeName: PropTypes.string.isRequired,
  params: PropTypes.shape({
    locale: PropTypes.string,
  }).isRequired,
  switchLanguage: PropTypes.func.isRequired,
};

export const mapDispatchToProps = (dispatch) => ({
  switchLanguage: async (locale) => {
    await dispatch(updateLocale(locale));
    await dispatch(loadLanguagePack('nasa-root', { fallbackLocale: 'en-US' }));
  },
});

export const mapStateToProps = (state) => {
  const localeName = state.getIn(['intl', 'activeLocale']);
  const languagePack = state.getIn(
    ['intl', 'languagePacks', localeName, 'nasa-root'],
    fromJS({})
  ).toJS();

  return {
    languageData: languagePack && languagePack.data ? languagePack.data : {},
    localeName,
  };
};

export const loadModuleData = async ({ store: { dispatch } }) => {
  await dispatch(loadLanguagePack('nasa-root', { fallbackLocale: 'en-US' }));
};

NasaRoot.holocron = {
  name: 'nasa-root',
  loadModuleData,
};

export default connect(mapStateToProps, mapDispatchToProps)(NasaRoot);
