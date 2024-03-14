import React, {useState} from 'react';
import {Layout} from 'antd';
import AppSidebar from './AppSidebar';
import AppHeader from './AppHeader';
import './index.style.less';
import {AppContentView} from '../../../index';
import AppFooter from '../components/AppFooter';
import AppScrollbar from '../../AppScrollbar';
import clsx from 'clsx';
import {FooterType} from '../../../../shared/constants/AppEnums';
import {useLayoutContext} from '../../../utility/AppContextProvider/LayoutContextProvider';
import Logout from '../../../../pages/auth/logout';

const MiniSidebarToggle = () => {
  const [isCollapsed, setCollapsed] = useState(false);
  const {footer, footerType}: any = useLayoutContext();

  const onToggleSidebar = () => {
    setCollapsed(!isCollapsed);
  };

  return (
    <Layout
      className={clsx('app-layout-mini-sidebar', {
        appMainFooter: footer && footerType === FooterType.FLUID,
        appMainFixedFooter: footer && footerType === FooterType.FIXED,
      })}>
      <AppSidebar isCollapsed={isCollapsed} />
      <Layout className='app-layout-mini-sidebar-main'>
        <AppHeader
          isCollapsed={isCollapsed}
          onToggleSidebar={onToggleSidebar}
        />
        <AppScrollbar className='main-mini-sidebar-scrollbar'>
          <AppContentView />
          <AppFooter />
          <Logout />
        </AppScrollbar>
      </Layout>
    </Layout>
  );
};

export default MiniSidebarToggle;
