import { createSelector } from 'reselect';

export const appDomainSelector = (state) => state.getIn(['config', 'appDomain']);

export const getAppDomain = createSelector(
  appDomainSelector,
  (appDomain) => appDomain
);
