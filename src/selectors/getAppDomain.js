import { createSelector } from 'reselect';

export const appDomainSelector = (state) => state.getIn(['browser', 'location', 'origin']);

export const getAppDomain = createSelector(
  appDomainSelector,
  (appDomain) => appDomain
);
