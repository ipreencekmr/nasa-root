import React from 'react';
import PropTypes from 'prop-types';
import { loadLanguagePack, updateLocale } from '@americanexpress/one-app-ducks';
import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import childRoutes from '../childRoutes';
import { MODULE_NAME } from '../constants/module';
import {
  getLanguageDataSelector, getLocaleSelector,
} from '../selectors/marketSelector';

export const NasaRoot = ({
  switchLanguage, languageData, params, localeName, children,
}) => {
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

          <title>{languageData?.title}</title>

          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          />

          <link
            rel="icon"
            type="image/png"
            href="https://img.icons8.com/emoji/32/satellite-emji.png"
            sizes="16x16"
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
    await dispatch(loadLanguagePack(MODULE_NAME, { fallbackLocale: 'en-GB' }));
  },
});

export const mapStateToProps = (state, ownProps) => {
  const localeName = getLocaleSelector(state);
  return {
    languageData: getLanguageDataSelector(state, ownProps?.params?.locale, MODULE_NAME),
    localeName,
  };
};

export const loadModuleData = async ({ store: { dispatch } }) => {
  await dispatch(loadLanguagePack(MODULE_NAME, { fallbackLocale: 'en-US' }));
};

NasaRoot.holocron = {
  name: MODULE_NAME,
  loadModuleData,
};

export default connect(mapStateToProps, mapDispatchToProps)(NasaRoot);
