import { errorPagesConfigs } from './errorPages';
import { authRouteConfig } from './auth';
import { initialUrl } from '../shared/constants/AppConst';
import Error403 from './errorPages/Error403';
import React from 'react';
import Error404 from './errorPages/Error404';
import { tab1Config } from './tab-1';
import Sports from './Sports';

const MyClub = React.lazy(() => import('./MyClub/myClub'));

const Users = React.lazy(() => import('./Users'));

const Transactions = React.lazy(() => import('./transactions'));

const Plans = React.lazy(() => import('./Plans'));

const Subscriptions = React.lazy(() => import('./Subscriptions'));

const authorizedStructure = {
  fallbackPath: '/sign-in',
  unAuthorizedComponent: <Error403 />,
  routes: [
    {
      path: '/MyClub', // Add tab-0 configuration
      element: <MyClub />,
    },
    ...tab1Config,
    {
      path: '/users',
      element: <Users />,
    },
    {
      path: '/sports',
      element: <Sports />,
    },
    {
      path: '/transactions',
      element: <Transactions />,
    },
    {
      path: '/plans',
      element: <Plans />,
    },
    {
      path: '/subscriptions',
      element: <Subscriptions />,
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