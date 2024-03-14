import React from 'react';
import {List, Button, Dropdown, Menu, Badge} from 'antd';
import AppScrollbar from '../AppScrollbar';
import IntlMessages from '../../utility/IntlMessages';
import NotificationItem from './NotificationItem';
import './index.style.less';
import BellIcon from '../../../assets/icon/bell_black.svg';
import BellIconWhite from '../../../assets/icon/bell_white.svg';

const AppNotifications = () => {
  const menu = (
    <Menu className='notify-header-message'>
      <Menu.Item className='header' key='notifications'>
        <IntlMessages id='common.notifications' />
        (0)
      </Menu.Item>
      <Menu.Item key='appScrollbar'>
        <List
          className='notify-list'
          dataSource={[]}
          renderItem={(item: any) => {
            return <NotificationItem key={item?.id} item={item} />;
          }}
        />
      </Menu.Item>
      <Menu.Item key='viewAll'>
        <Button type='primary' className='notify-btn-all'>
          <IntlMessages id='common.viewAll' />
        </Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown
      dropdownRender={() => menu}
      className='dropdown'
      trigger={['click']}>
      <a className='notify-link' onClick={(e) => e.preventDefault()}>
        <Badge count={0} size='small'>
          <span className='notify-icon'>
            <img id={'BellIcon'} src={BellIcon} />
            <img id={'BellIconWhite'} src={BellIconWhite} />
          </span>
        </Badge>
        <span className='notify-text'>
          <IntlMessages id='common.notifications' />
        </span>
      </a>
    </Dropdown>
  );
};

export default AppNotifications;
