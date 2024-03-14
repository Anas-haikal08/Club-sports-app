import React, {useContext, useState} from 'react';
import AppPageMetadata from '../../../domain/core/AppPageMetadata';
import AuthWrapper from '../AuthWrapper';
import IntlMessages from '../../../domain/utility/IntlMessages';
import {Card, Col, Row} from 'antd';
import ResetPasswordForm from './reset-password-form';
import SendEmailForm from './send-email-form';
import {useIntl} from 'react-intl';
import './index.style.less';

const ForgetPassword = () => {
  const [error, setError] = useState<any>();
  const [loadingEmail, setLoadingEmail] = useState(false);
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState<any>();
  const {messages} = useIntl();

  const onFinish = async (values: any) => {
    setLoadingEmail(true);
    let response: any = {
      data: {},
    };
    if (response?.error) {
      setError(response?.error?.message);
      setLoadingEmail(false);
    } else if (response?.data) {
      setError('');
      setSuccess(true);
      setEmail(values?.email);
      setLoadingEmail(false);
    } else setLoadingEmail(false);
  };

  const onFinishReset = async (values: any) => {
    console.log(values);
  };

  return (
    <AppPageMetadata title={messages['auth.forgotPassword'].toString()}>
      {/* <div className='forgotPassword-container'>
        <Row justify='center' align='middle' className='fullContent fullHeight'>
          <Col xl={8} lg={10} md={15} sm={20} xs={24}>
            <Card className='forgotPassword-card'>
              <Row gutter={[10, 30]}>
                <Col span={24}>
                  <h3 className='forgotPassword-title'>
                    <IntlMessages id='auth.forgotPassword' />
                  </h3>
                </Col>
                <Col span={24}>
                  {success ? (
                    <Col span={24}>
                      <ResetPasswordForm
                        error={error}
                        onFinish={onFinishReset}
                      />
                    </Col>
                  ) : (
                    <Col span={24}>
                      <SendEmailForm
                        error={error}
                        onFinishSend={onFinish}
                        loadingEmail={loadingEmail}
                      />
                    </Col>
                  )}
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div> */}
      <IntlMessages id='auth.forgotPassword' />
    </AppPageMetadata>
  );
};

export default ForgetPassword;
