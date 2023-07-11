import { combineReducers } from 'redux-immutable';
import authReducer from './authDuck';

const reducer = combineReducers({
  authInfo: authReducer,
});

export default reducer;
