import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const AuthRoutes = ({children}: any) => {
  return <Fragment>{children}</Fragment>;
};

export default AuthRoutes;

AuthRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};
