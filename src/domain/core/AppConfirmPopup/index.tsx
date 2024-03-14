import {Avatar, Button, Col, Row} from 'antd';
import React from 'react';
import responseAvatar from '../../../assets/images/popups/icn_120_record.svg';
import './index.style.less';
import AppModal from '../AppModal';
import {useSelector} from 'react-redux';
import {getDirection} from 'src/domain/app/redux/auth/auth-selectors';
import {ThemeDirection} from 'src/shared/constants/AppEnums';

const AppConfirmPopup = ({
  loading,
  visible,
  setVisible,
  handleOK,
  title,
  okText,
  cancelText,
}: any) => {
  const direction = useSelector(getDirection);
  return (
    <AppModal
      width={'700px'}
      visible={visible}
      footer={
        <Row
          gutter={[20, 20]}
          style={{direction: direction === ThemeDirection.RTL ? 'ltr' : 'rtl'}}>
          <Col span={4}>
            <Button
              block
              type={'default'}
              onClick={() => {
                setVisible && setVisible(false);
              }}>
              {cancelText}
            </Button>
          </Col>
          <Col span={4}>
            <Button
              loading={loading}
              type={'primary'}
              onClick={() => handleOK()}>
              {okText}
            </Button>
          </Col>
        </Row>
      }
      onCancel={() => setVisible && setVisible(false)}>
      <div className={'confirmPopup'} dir={direction}>
        <Row justify={'center'}>
          <Avatar size={150} shape={'square'} src={responseAvatar} />
        </Row>
        <Row justify={'center'}>
          <Col className={'confirmTitle'}>{title}</Col>
        </Row>
      </div>
    </AppModal>
  );
};

export default AppConfirmPopup;
