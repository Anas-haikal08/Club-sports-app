import {Avatar} from 'antd';
import React from 'react';

class Utils {
  getNotificationAvatar(item: any) {
    return (
      <Avatar
        className='notify-message-avatar'
        src={'/assets/images/logo-white.svg'}
        icon={''}
        alt={''}
      />
    );
  }

  async handleNotification(notification: any) {
    console.log({notification});
  }
}

const NotificationsUtils = new Utils();
export default NotificationsUtils;
