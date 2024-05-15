import React, {Fragment} from 'react';
import './index.style.less';
import PropTypes from 'prop-types';
import SimpleBarReact from 'simplebar-react';
import 'simplebar/src/simplebar.css';
import AppVerticalMenu from '../components/AppVerticalNav';
import MainSidebar from '../components/MainSidebar';

const AppSidebar = ({isCollapsed}) => {
  return (
    <MainSidebar
      className={'mini-sidebar-toggle'}
      collapsible
      breakpoint='xl'
      collapsedWidth='0'
      collapsed={isCollapsed}>
      <Fragment>
        <div className='logo-sidebar'>
          <img src='/assets/images/logos.png' alt='logo' />
        </div>
      </Fragment>
      <SimpleBarReact className={'app-mini-sidebar-scrollbar'}>
        <AppVerticalMenu />
      </SimpleBarReact>
    </MainSidebar>
  );
};

export default AppSidebar;

AppSidebar.propTypes = {
  isCollapsed: PropTypes.bool,
};
