import React from 'react';
import {RoutePermittedRole} from '../../shared/constants/AppEnums';

const Tab11 = React.lazy(() => import('./tab-1-1'));
const Tab12 = React.lazy(() => import('./tab-1-2'));
 
export const tab1Config = [
  {
    permittedRole: RoutePermittedRole.user,
    path: '/Clubs-Management/Clubs',
    element: <Tab11 />,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/Clubs-Management/Add-Club',
    element: <Tab12 />,
  },
];
