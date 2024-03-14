import React, {Fragment} from 'react';
import MessageItem from './MessageItem';
import IntlMessages from '../../utility/IntlMessages';

import {Button, Dropdown, List, Menu} from 'antd';
import './index.style.less';
import {AiOutlineMail} from 'react-icons/ai';
import SimpleBarReact from 'simplebar-react';
import 'simplebar/src/simplebar.css';
const AppHeaderMessages = () => {
  const menu = (
    <Menu className='header-message'>
      <Menu.Item className='header'>
        <IntlMessages id='dashboard.messages' />({'messages'.length})
      </Menu.Item>
      <Menu.Item>
        <SimpleBarReact className='header-message-scroll-submenu'>
          <List
            dataSource={[]}
            renderItem={(item: any) => {
              return <MessageItem key={item?.id} item={item} />;
            }}
          />
        </SimpleBarReact>
      </Menu.Item>
      <Menu.Item>
        <Button className='header-message-btn' type='primary'>
          <IntlMessages id='common.viewAll' />
        </Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <Fragment>
      <Dropdown dropdownRender={() => menu} trigger={['click']}>
        <a className='header-message-link' onClick={(e) => e.preventDefault()}>
          <span className='header-message-icon'>
            <AiOutlineMail />
          </span>
          <span className='header-message-link-text'>
            <IntlMessages id='dashboard.messages' />
          </span>
        </a>
      </Dropdown>
    </Fragment>
  );
};

export default AppHeaderMessages;
