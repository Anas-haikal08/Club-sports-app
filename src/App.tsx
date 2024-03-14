import React from 'react';

import './shared/styles/crema.less';
import {
  AppContextProvider,
  AppLayout,
  AppLocaleProvider,
  AppThemeProvider,
  AuthRoutes,
} from './domain';
import {BrowserRouter} from 'react-router-dom';
import AuthProvider from './pages/auth/context';

const App = () => {
  return (
    <AppContextProvider>
      <AuthProvider>
        <AppThemeProvider>
          <AppLocaleProvider>
            <BrowserRouter>
              <AuthRoutes>
                <AppLayout />
              </AuthRoutes>
            </BrowserRouter>
          </AppLocaleProvider>
        </AppThemeProvider>
      </AuthProvider>
    </AppContextProvider>
  );
};

export default App;
