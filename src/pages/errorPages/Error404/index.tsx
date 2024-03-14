import React from 'react';
import {useNavigate} from 'react-router-dom';
import IntlMessages from '../../../domain/utility/IntlMessages';
import AppAnimateGroup from '../../../domain/core/AppAnimateGroup';
import {Button} from 'antd';
import '../index.style.less';
import AppPageMetadata from '../../../domain/core/AppPageMetadata';
import {ReactComponent as Logo} from '../../../assets/icon/404.svg';
import {useIntl} from 'react-intl';

const Error404 = () => {
  const navigate = useNavigate();
  const {messages} = useIntl();

  const onGoBackToHome = () => {
    navigate('/');
  };

  return (
    <AppAnimateGroup type='bottom'>
      <AppPageMetadata title={messages['common.notFound'].toString()} />
      <div className='error-container' key='a'>
        <div className='error-img'>
          <Logo />
        </div>
        <div className='error-content'>
          <h3>
            <IntlMessages id='error.404Error' />.
          </h3>
          <div className='error-para'>
            <p className='mb-0'>
              <IntlMessages id='error.message1' />
            </p>
            <p className='mb-0'>
              <IntlMessages id='error.message2' />
            </p>
          </div>
          <Button type='primary' className='error-btn' onClick={onGoBackToHome}>
            <IntlMessages id='error.goBackToHome' />
          </Button>
        </div>
      </div>
    </AppAnimateGroup>
  );
};

export default Error404;
