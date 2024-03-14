import {Link} from 'react-router-dom';
import {Menu} from 'antd';
import React, {Fragment} from 'react';
import routesConfig from '../../pages/routeConfig';
import {useSidebarContext} from './AppContextProvider/SidebarContextProvider';
import hasPermission from 'src/shared/functions/access-control';
import IntlMessages from './IntlMessages';

const RenderMenuItemChildren = (item: any) => {
  const {icon, messageId, path} = item;

  if (path && path.includes('/'))
    return (
      <Link to={path}>
        {icon &&
          (React.isValidElement(icon) ? (
            <span className='ant-menu-item-icon'>{icon}</span>
          ) : (
            <span className='ant-menu-item-icon' />
          ))}
        <span data-testid={messageId.toLowerCase + '-nav'}>
          <IntlMessages id={messageId} />
        </span>
      </Link>
    );
  else {
    return (
      <Fragment>
        {icon &&
          (React.isValidElement(icon) ? (
            <span className='ant-menu-item-icon'>{icon}</span>
          ) : (
            <span className='ant-menu-item-icon' />
          ))}
        <span data-testid={messageId.toLowerCase + '-nav'}>
          <IntlMessages id={messageId} />
        </span>
      </Fragment>
    );
  }
};

const renderMenu = (
  item: any,
  sidebarColorSet: any,
  isSidebarBgImage: any,
  index: any,
  viewInList: boolean = true,
) => {
  return viewInList ? (
    item.type === 'group' ? (
      <Menu.SubMenu
        key={item.path ? item.path : item.id}
        title={RenderMenuItemChildren(item)}>
        {item.children.map((item: any) =>
          renderMenu(
            item,
            sidebarColorSet,
            isSidebarBgImage,
            index + 1,
            hasPermission(item?.permissionKey),
          ),
        )}
      </Menu.SubMenu>
    ) : (
      <Menu.Item key={item.id}>
        {item.children ? item.children : RenderMenuItemChildren(item)}
      </Menu.Item>
    )
  ) : null;
};

export const GetRouteMenus = () => {
  const {sidebarColorSet}: any = useSidebarContext();
  const {isSidebarBgImage}: any = useSidebarContext();
  return routesConfig.map((route: any) =>
    renderMenu(
      route,
      sidebarColorSet,
      isSidebarBgImage,
      0,
      hasPermission(route?.permissionKey),
    ),
  );
};
