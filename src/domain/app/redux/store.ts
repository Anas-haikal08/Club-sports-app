import {configureStore} from '@reduxjs/toolkit';
import {reducer} from './rootReducer';

export const store = configureStore({
  reducer,
  devTools: true,
});

export type RootState = ReturnType<typeof reducer>;
