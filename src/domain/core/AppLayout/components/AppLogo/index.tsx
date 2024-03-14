import React from 'react';
import './index.style.less';
import PropTypes from 'prop-types';

const AppLogo = () => {
  return (
    <div className='app-title-logo'>
      <img src='/assets/images/logo-white.svg' alt='logo' />
    </div>
  );
};

export default AppLogo;

AppLogo.propTypes = {
  hasSidebarColor: PropTypes.bool,
};
