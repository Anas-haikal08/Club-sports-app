import React from 'react';
import IntlMessages from '../../../domain/utility/IntlMessages';
import AppAnimateGroup from '../../../domain/core/AppAnimateGroup';
import {Button, Form, Input} from 'antd';
import {useIntl} from 'react-intl';
import '../index.style.less';
import AppPageMetadata from '../../../domain/core/AppPageMetadata';
import {ReactComponent as Logo} from '../../../assets/icon/comingsoon.svg';

const ComingSoon = () => {
  const {messages} = useIntl();
  const onFinish = () => {};

  const onFinishFailed = () => {};

  return (
    <AppAnimateGroup type='bottom'>
      <AppPageMetadata title={messages['comingSoon'].toString()}/>
      <div className='error-container' key='coming_soon'>
        <div className='error-img-lg'>
          <Logo />
        </div>
        <div>
          <div className='error-content'>
            <h3>
              <IntlMessages id='error.comingSoon' />!
            </h3>
            <div className='error-para'>
              <p className='mb-0'>
                <IntlMessages id='error.comingSoonMessage1' />
              </p>
              <p className='mb-0'>
                <IntlMessages id='error.comingSoonMessage2' />
              </p>
            </div>
          </div>
          <div className='error-form-coming'>
            <Form
              className='error-form'
              name='basic'
              initialValues={{remember: true}}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}>
              <Form.Item
                name='email'
                className='form-field'
                rules={[
                  {required: true, message: 'Please enter Email Address!'},
                ]}>
                <Input placeholder={messages['common.emailAddress']} />
              </Form.Item>

              <Button type='primary' className='error-btn' htmlType='submit'>
                <IntlMessages id='error.notifyMe' />
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </AppAnimateGroup>
  );
};

export default ComingSoon;
