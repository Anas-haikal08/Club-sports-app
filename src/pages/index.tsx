import { errorPagesConfigs } from './errorPages';
import { authRouteConfig } from './auth';
import { initialUrl } from '../shared/constants/AppConst';
import Error403 from './errorPages/Error403';
import React from 'react';
import Error404 from './errorPages/Error404';
import { tab1Config } from './tab-1';

const HomePage = React.lazy(() => import('./HomePage'));

const Users = React.lazy(() => import('./Users'));

const Transactions = React.lazy(() => import('./transactions'));

const Plans = React.lazy(() => import('./Plans'));

const authorizedStructure = {
  fallbackPath: '/sign-in',
  unAuthorizedComponent: <Error403 />,
  routes: [
    {
      path: '/Home', // Add tab-0 configuration
      element: <HomePage />,
    },
    ...tab1Config,
    {
      path: '/users',
      element: <Users />,
    },
    {
      path: '/transactions',
      element: <Transactions />,
    },
    {
      path: '/plans',
      element: <Plans />,
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