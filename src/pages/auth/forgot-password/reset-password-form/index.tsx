import {Col, Form, Row, Typography} from 'antd';
import IntlMessages from '../../../../domain/utility/IntlMessages';
import {useIntl} from 'react-intl';
import {passwordRegex} from '../../../../shared/constants/AppConst';
import {Input, InputPassword} from 'src/shared/components/input';
import Button from 'src/shared/components/button';
import '../index.style.less';

const ResetPasswordForm = ({error, onFinish, loading}: any) => {
  const {messages} = useIntl();
  const onFinishFailed = () => {};

  return (
    <Row className='fullContent'>
      <Col span={20}>
        <Form
          name='reset-password'
          initialValues={{}}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}>
          <div className='form-item-title'>
            {messages['common.code'].toString()}
          </div>
          <Form.Item
            name='code'
            className='form-field'
            rules={[
              {
                required: true,
                message: messages['validation.codeRequired'].toString(),
              },
            ]}>
            <Input />
          </Form.Item>
          <div className='form-item-title'>
            {messages['auth.changePassword.newPassword'].toString()}
          </div>
          <Form.Item
            name='newPassword'
            className='form-field'
            rules={[
              {
                required: true,
                message: messages['validation.newPasswordRequired'].toString(),
              },
              {
                pattern: passwordRegex,
                message: messages['validation.passwordRule'].toString(),
              },
            ]}>
            <InputPassword autoComplete={'new-password'} />
          </Form.Item>

          <div className='form-item-title'>
            {messages['common.confirmPassword'].toString()}
          </div>
          <Form.Item
            name='confirmNewPassword'
            className='form-field'
            rules={[
              {
                required: true,
                message: messages['validation.reEnterPassword'].toString(),
              },
              ({getFieldValue}) => ({
                validator(_, value) {
                  if (!value || getFieldValue('newPassword') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      messages['validation.misMatchedPassword'].toString(),
                    ),
                  );
                },
              }),
            ]}>
            <InputPassword autoComplete={'new-password'} />
          </Form.Item>

          <Typography.Text type='danger'>{error}</Typography.Text>

          <div className='form-btn-field'>
            <Button
              block
              type='primary'
              htmlType='submit'
              loading={loading}
              className='sign-btn'>
              <IntlMessages id='common.recoverPassword' />
            </Button>
          </div>
        </Form>
      </Col>
    </Row>
  );
};

export default ResetPasswordForm;
