import React from 'react';
import {Layout} from 'antd';
import {ThemeMode} from '../../../../shared/constants/AppEnums';
import {useThemeContext} from '../../../utility/AppContextProvider/ThemeContextProvider';
import {useSidebarContext} from '../../../utility/AppContextProvider/SidebarContextProvider';
import PropTypes from 'prop-types';

const {Sider} = Layout;

const MainSidebar = ({
  children,
  className,
  collapsed = false,
  ...props
}: any) => {
  const {themeMode}: any = useThemeContext();
  const {sidebarColorSet, isSidebarBgImage, sidebarBgImage}: any =
    useSidebarContext();

  return (
    <Sider
      theme={themeMode === ThemeMode.LIGHT ? ThemeMode.LIGHT : ThemeMode.DARK}
      breakpoint='lg'
      className={className}
      style={{
        backgroundColor: sidebarColorSet.sidebarBgColor,
        color: sidebarColorSet.sidebarTextColor,
        backgroundImage: isSidebarBgImage
          ? `url(/assets/images/sidebar/images/${sidebarBgImage}.png)`
          : '',
      }}
      collapsed={collapsed}
      {...props}>
      {children}
    </Sider>
  );
};

export default MainSidebar;
MainSidebar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.any,
  collapsed: PropTypes.bool,
};
