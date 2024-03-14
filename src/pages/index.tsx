import { errorPagesConfigs } from './errorPages';
import { authRouteConfig } from './auth';
import { initialUrl } from '../shared/constants/AppConst';
import Error403 from './errorPages/Error403';
import React from 'react';
import Error404 from './errorPages/Error404';
import { tab1Config } from './tab-1';

const Tab0 = React.lazy(() => import('./tab-0'));

const Tab2 = React.lazy(() => import('./tab-2'));

const authorizedStructure = {
  fallbackPath: '/sign-in',
  unAuthorizedComponent: <Error403 />,
  routes: [
    {
      path: '/Home', // Add tab-0 configuration
      element: <Tab0 />,
    },
    ...tab1Config,
    {
      path: '/users',
      element: <Tab2 />,
    },
  ],
};

const unAuthorizedStructure = {
  fallbackPath: initialUrl,
  routes: authRouteConfig,
};

const anonymousStructure = {
  routes: errorPagesConfigs.concat([
    {
      path: '*',
      element: <Error404 />,
    },
  ]),
};

export { authorizedStructure, unAuthorizedStructure, anonymousStructure };