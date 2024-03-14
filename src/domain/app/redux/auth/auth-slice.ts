import {createSlice} from '@reduxjs/toolkit';
import {ThemeDirection} from 'src/shared/constants/AppEnums';

interface AuthInitialState {
  visibleLogout?: boolean;
  loading?: boolean;
  isAuthenticated?: boolean;
  dircation?: string;
}
// logout, loading ,isAuthenticated
const initialState: AuthInitialState = {
  visibleLogout: false,
  loading: false,
  isAuthenticated: false,
  dircation: ThemeDirection.LTR,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setVisibleLogout: (state, action) => {
      state.visibleLogout = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setDirection: (state, action) => {
      state.dircation = action.payload;
    },
  },
});

export const {setVisibleLogout, setLoading, setAuthenticated, setDirection} =
  authSlice.actions;
export default authSlice.reducer;
