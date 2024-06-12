import React from 'react';
import { RoutePermittedRole } from '../../shared/constants/AppEnums';

const Clubs = React.lazy(() => import('./Clubs'));
const AddClub = React.lazy(() => import('./AddClub'));

export const tab1Config = [
  {
    permittedRole: RoutePermittedRole.user,
    path: '/Club-Management/Club',
    element: <Clubs />,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/Club-Management/Add-Field',
    element: <AddClub />,
  },
];
