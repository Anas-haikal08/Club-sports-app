import {RootState} from '../store';

export const getVisibleLogout = (state: RootState) => state.auth.visibleLogout;
export const getLoading = (state: RootState) => state.auth.loading;
export const getIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;
export const getDirection = (state: RootState) => state.auth.dircation;
