import React from 'react';
export type AuthContextProps = {
  visibleLogout?: boolean;
  setVisibleLogout?: React.Dispatch<React.SetStateAction<boolean>>;
  loading?: boolean;
  logout?: () => void;
  isAuthenticated?: boolean;
  setAuthenticated?: React.Dispatch<React.SetStateAction<boolean>>;
};
