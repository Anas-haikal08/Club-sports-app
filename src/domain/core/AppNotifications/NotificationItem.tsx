import React from 'react';
import {List, Avatar} from 'antd';
import './NotificationItem.less';

const NotificationItem = ({item}: {item: any}) => {
  return (
    <List.Item className='notify-listItem item-hover'>
      <List.Item.Meta
        avatar={
          <Avatar
            className='notify-message-avatar'
            src={item.image}
            alt={item.name}
          />
        }
        title={item.name}
        description={item.message}
      />
    </List.Item>
  );
};

export default NotificationItem;
