import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu } from 'antd';
import { GetRouteMenus } from '../../../../utility/VerticalMenuUtils';
import clsx from 'clsx';
import './index.style.less';
import defaultConfig from '../../../../utility/AppContextProvider/defaultConfig';
import { useSidebarContext } from '../../../../utility/AppContextProvider/SidebarContextProvider';
import { MenuStyle } from '../../../../../shared/constants/AppEnums';

const AppVerticalNav = () => {
  const { menuStyle, sidebarColorSet }: any = useSidebarContext();
  const { pathname } = useLocation();
  const selectedKeys = pathname.substr(1).split('/');
  const defaultOpenKeys = selectedKeys[0];
  const [openKeys, setOpenKeys] = useState([defaultOpenKeys]);

  console.log('====================================');
  console.log(openKeys);
  console.log('====================================');
  useEffect(() => {
    setOpenKeys(selectedKeys?.slice(0, selectedKeys.length - 1));
  }, []);

  const onOpenChange = (keys: any) => {
    const latestOpenKey = keys[keys.length - 1];
    setOpenKeys(
      latestOpenKey
        ? [...new Set([...keys, ...latestOpenKey?.split('.'), latestOpenKey])]
        : [],
    );
  };

  return (
    <Menu
      theme={sidebarColorSet.mode}
      mode='inline'
      className={clsx('app-main-sidebar-menu ', {
        'menu-rounded': menuStyle === MenuStyle.ROUNDED,
        'menu-rounded rounded-menu-reverse':
          menuStyle === MenuStyle.ROUNDED_REVERSE,
        'menu-rounded standard-menu': menuStyle === MenuStyle.STANDARD,
        'menu-rounded curved-menu': menuStyle === MenuStyle.CURVED_MENU,
        'bg-color-menu':
          sidebarColorSet.sidebarBgColor !==
          defaultConfig.sidebar.colorSet.sidebarBgColor,
      })}
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      selectedKeys={[selectedKeys[selectedKeys.length - 1]]}>
      {GetRouteMenus()}
    </Menu>
  );
};

export default AppVerticalNav;
