import {Modal} from 'antd';
import React from 'react';

const AppModal: React.FC<any> = ({
  visible,
  footer,
  hideCloseIcon,
  onOk,
  onCancel,
  children,
  width,
}: any) => {
  return (
    <Modal
      maskClosable={hideCloseIcon === true}
      width={width}
      open={visible}
      closeIcon={hideCloseIcon === true ? <></> : undefined}
      footer={footer}
      onOk={onOk}
      onCancel={onCancel}>
      {children}
    </Modal>
  );
};

export default AppModal;
