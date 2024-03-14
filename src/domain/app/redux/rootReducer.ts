import {combineReducers} from 'redux';
import authSlice from './auth/auth-slice';

export let reducer = combineReducers({
  auth: authSlice,
});
