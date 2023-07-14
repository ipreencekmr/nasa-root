import Cookies from 'js-cookie';
import { externalRedirect } from '@americanexpress/one-app-ducks';
import { getAppDomain } from '../selectors/getAppDomain';

export const requireAuth = (store) => async (nextState, replace, cb) => {
  if (!global.BROWSER) return cb();

  const accessToken = Cookies.get('accessToken');
  const state = store.getState();
  const appDomain = getAppDomain(state);
  const { locale } = nextState.params;

  const signInUrl = `${appDomain}/${locale}/auth/signin`;

  if (!accessToken) {
    store.dispatch(externalRedirect(signInUrl));
  }
  return cb();
};
