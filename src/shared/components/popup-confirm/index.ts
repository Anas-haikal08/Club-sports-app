import { Modal } from 'antd';

export const popupConfirm = (
  onOk: () => void,
  content = '',
  title = '',
  onCancel = () => { },
) => {
  Modal.confirm({
    title,
    content,
    centered: true,
    onOk,
    onCancel,
    className: 'confirm-modal',
  });
};
