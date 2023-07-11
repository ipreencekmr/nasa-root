import { fromJS } from 'immutable';
import { MODULE_NAME } from '../constants/module';

const SET_AUTH_INFO = `${MODULE_NAME}/SET_AUTH_INFO`;

const initialState = fromJS({
  authorized: false,
  authToken: null,
});

// eslint-disable-next-line default-param-last -- desc
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_INFO:
      return state.set('authorized', action.payload.authorized)
        .set('authToken', action.payload.authToken);
    default:
      return state;
  }
};

export const setAuthInfo = (authorized, authToken) => ({
  type: SET_AUTH_INFO,
  payload: {
    authorized,
    authToken,
  },
});

export default reducer;
