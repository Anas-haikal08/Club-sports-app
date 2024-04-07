import { Modal } from 'antd';
import IntlMessages from '../../../domain/utility/IntlMessages';
import { Fragment } from 'react';
import { ModalDTOS } from '../../common-dtos/Modal-DTOS';
import imag from '../../../assets/images/popups/modal_img_1.svg';
const SuccessfullyPopup = (props: ModalDTOS) => {
  return (
    <Fragment>
      <Modal
        className='SuccessfullyPopup'
        centered
        open={props.visible}
        onOk={() => props.setVisible(false)}
        okText={<IntlMessages id='common.done' />}
        width={700}>
        {/* <img src={imag} /> */}
        <p className='title'>{props.title}</p>
      </Modal>
    </Fragment>
  );
};

export default SuccessfullyPopup;
