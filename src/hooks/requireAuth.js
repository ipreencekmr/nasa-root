import { externalRedirect } from '@americanexpress/one-app-ducks';
import { getAppDomain } from '../selectors/getAppDomain';
import { getAuthInfo } from '../selectors/getAuthInfo';
import { MODULE_NAME } from '../constants/module';

export const requireAuth = (store) => async (nextState, replace, cb) => {
  if (!global.BROWSER) return cb();

  const state = store.getState();
  const appDomain = getAppDomain(state);
  const { locale } = nextState.params;

  const signInUrl = `${appDomain}/${locale}/auth/signin`;
  const authInfo = getAuthInfo(state, MODULE_NAME);
  if (!authInfo?.authorized) {
    store.dispatch(externalRedirect(signInUrl));
  }
  return cb();
};
