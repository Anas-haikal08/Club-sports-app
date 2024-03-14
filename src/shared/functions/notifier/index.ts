import {notification} from 'antd';

export const notifier = (
  message: string,
  type: 'error' | 'success' | 'info' | 'warning',
) => {
  notification[type]({
    message,
  });
};
