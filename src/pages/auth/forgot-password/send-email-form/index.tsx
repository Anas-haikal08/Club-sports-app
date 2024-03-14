import React from 'react';
import {Col, Form, Row, Typography} from 'antd';
import IntlMessages from '../../../../domain/utility/IntlMessages';
import {useIntl} from 'react-intl';
import {Link} from 'react-router-dom';
import {Input} from 'src/shared/components/input';
import Button from 'src/shared/components/button';
import '../index.style.less';

const SendEmailForm = ({error, onFinishSend, loadingEmail}: any) => {
  const {messages} = useIntl();

  const onFinishFailed = () => {};

  return (
    <Form
      className='sign-form'
      name='basic'
      initialValues={{}}
      onFinish={onFinishSend}
      onFinishFailed={onFinishFailed}>
      <Row gutter={[10, 10]}>
        <Col span={24}>
          <div className='form-item-title'>
            {messages['common.email'].toString()}
          </div>
          <Form.Item
            name='email'
            className='form-field'
            rules={[
              {
                required: true,
                message: messages['validation.emailRequired'].toString(),
              },
              {
                type: 'email',
                message: messages['validation.emailRule'].toString(),
              },
            ]}>
            <Input />
          </Form.Item>
          <Typography.Text type='danger'>{error}</Typography.Text>
        </Col>
        <Col span={24}>
          <Row gutter={[10, 10]}>
            <Col>
              <IntlMessages id='common.alreadyHavePassword' />
            </Col>
            <Col>
              <Link to='/sign-in'>
                <IntlMessages id='common.signIn' />
              </Link>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Button
            block
            type='primary'
            htmlType='submit'
            loading={loadingEmail}
            className='sign-btn'>
            <IntlMessages id='common.send' />
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SendEmailForm;
