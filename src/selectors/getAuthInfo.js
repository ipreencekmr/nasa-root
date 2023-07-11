import { fromJS } from 'immutable';
import { createSelector } from 'reselect';

export const authInfoSelector = (state, moduleName) => state.getIn(['modules', moduleName, 'authInfo'], fromJS({}));

export const getAuthInfo = createSelector(
  authInfoSelector,
  (authInfo) => authInfo?.toJS()
);
