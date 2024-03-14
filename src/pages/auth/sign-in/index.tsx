import { useIntl } from 'react-intl';
import AppPageMetadata from 'src/domain/core/AppPageMetadata';
import './index.style.less';
import { Card, Col, Row } from 'antd';
import IntlMessages from 'src/domain/utility/IntlMessages';
import Button from 'src/shared/components/button';
import { GoogleIcon } from 'src/shared/components/icons';
import { Form, Formik } from 'formik';
import FormItem from 'src/shared/components/form-item';
import { Input, InputPassword } from 'src/shared/components/input';
import { signInSchema } from './schema';
import { useState } from 'react';
import Checkbox from 'src/shared/components/checkbox';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { AUTH_TOKEN } from 'src/shared/constants/AppConst';

const SignIn = () => {
  const { messages } = useIntl();
  const navigate = useNavigate();
  const [, setCookies] = useCookies()
  const [initialValues] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (values: any, { setSubmitting }: any) => {
    try {
      setSubmitting(true);
      console.log(values);
      setCookies(AUTH_TOKEN, values.email, {
        path: "/"
      })
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password');
  };
  return (
    <AppPageMetadata title={messages['auth.signin'].toString()}>
      <div className='signin-container background-image'>
        <Row justify='center' align='middle' className='fullContent fullHeight'>
          <Col xl={8} lg={10} md={15} sm={20} xs={24}>
            <Card className='signin-card'>
              <Row gutter={[10, 30]}>
                <Col span={24}>
                  <h3 className='signin-title'>
                    <IntlMessages id='auth.signin.title' />
                  </h3>
                </Col>
                {/* */}
                <Col span={24}>
                  <Formik enableReinitialize initialValues={initialValues} onSubmit={handleSubmit} validationSchema={signInSchema(messages)} validateOnChange={false} validateOnBlur={false}>
                    {({ handleSubmit }: any) => {
                      return (
                        <Form>
                          <Row
                            className='fullContent'
                            gutter={[0, 20]}
                            justify='center'>
                            <Col span={24}>
                              <FormItem
                                layoutHorizontal
                                name='email'
                                label={messages['common.email'].toString()}
                                classNameTitle='form-item-title'
                                fieldCommponent={<Input autoComplete='off' />}
                              />
                            </Col>
                            <Col span={24}>
                              <FormItem
                                layoutHorizontal
                                name='password'
                                label={messages['common.password'].toString()}
                                type='password'
                                classNameTitle='form-item-title'
                                fieldCommponent={
                                  <InputPassword
                                    autoComplete={'new-password'}
                                  />
                                }
                              />
                            </Col>

                            <Col span={24}>
                              <Row
                                gutter={[20, 10]}
                                justify='space-around'
                                align='middle'>
                                <Col>
                                  <FormItem
                                    layoutHorizontal
                                    name='rememberMe'
                                    type='checkbox'
                                    fieldCommponent={
                                      <Checkbox>
                                        <IntlMessages id='auth.signin.rememberMe' />
                                      </Checkbox>
                                    }
                                  />
                                </Col>
                                <Col>
                                  <Button
                                    type='link'
                                    color='black'
                                    onClick={handleForgotPassword}>
                                    <IntlMessages id='auth.forgotPassword' />
                                  </Button>
                                </Col>
                              </Row>
                            </Col>

                            <Col span={24}>
                              <Button
                                type='primary'
                                htmlType='submit'
                                className='fullContent'
                                onClick={handleSubmit}>
                                {messages['auth.signin'].toString()}
                              </Button>
                            </Col>
                          </Row>
                        </Form>
                      );
                    }}
                  </Formik>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    </AppPageMetadata>
  );
};

export default SignIn;