import React from 'react';

const SignIn = React.lazy(() => import('./sign-in'));
const ForgotPassword = React.lazy(() => import('./forgot-password'));

export const authRouteConfig = [
  {
    path: '/sign-in',
    element: <SignIn />,
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />,
  },
];
