import React from 'react';
import { RoutePermittedRole } from '../../shared/constants/AppEnums';

const Clubs = React.lazy(() => import('./Clubs'));
const AddClub = React.lazy(() => import('./AddClub'));

export const tab1Config = [
  {
    permittedRole: RoutePermittedRole.user,
    path: '/Clubs-Management/Clubs',
    element: <Clubs />,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/Clubs-Management/Add-Club',
    element: <AddClub />,
  },
];
