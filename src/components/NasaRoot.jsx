import React from 'react';
import PropTypes from 'prop-types';
import { loadLanguagePack, updateLocale } from '@americanexpress/one-app-ducks';
import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux';
import { fromJS } from 'immutable';
// eslint-disable-next-line import/no-extraneous-dependencies -- desc
import { Helmet } from 'react-helmet';
import childRoutes from '../childRoutes';

export const NasaRoot = ({ languageData, localeName, children }) => {
  // naive solution - up to user on how to load in data

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
};

export const mapDispatchToProps = (dispatch) => ({
  switchLanguage: async ({ target }) => {
    await dispatch(updateLocale(target.value));
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
