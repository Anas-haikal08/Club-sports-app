import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import IntlMessages from '../../../domain/utility/IntlMessages';
import AppAnimateGroup from '../../../domain/core/AppAnimateGroup';
import {Button} from 'antd';
import '../index.style.less';
import AppPageMetadata from '../../../domain/core/AppPageMetadata';
import {ReactComponent as Logo} from '../../../assets/icon/401.svg';
import {useCookies} from 'react-cookie';
import {AUTH_TOKEN} from '../../../shared/constants/AppConst';
import MainUtils from '../../../shared/utils/main';
import {useIntl} from 'react-intl';

const Error401 = () => {
  const navigate = useNavigate();
  const [cookies, setCookies] = useCookies();
  const {messages} = useIntl();
  const onGoBackToHome = () => {
    navigate('/sign-in');
  };
  useEffect(() => {
    (async () => {
      if (!MainUtils.isEmptyValue(cookies[AUTH_TOKEN])) {
        setCookies(AUTH_TOKEN, '');
      }
    })();
  }, [cookies]);
  return (
    <AppAnimateGroup type='bottom'>
      <AppPageMetadata title={messages['error.unauthorized'].toString()} />
      <div className='error-container' key='a'>
        <div className='error-img'>
          <Logo />
        </div>
        <div className='error-content'>
          <h3>{messages['error.unauthorized'].toString()}</h3>
          <div className='error-para'>
            <p className='mb-0'>You are not authorized for this page!</p>
          </div>
          <Button type='primary' className='error-btn' onClick={onGoBackToHome}>
            <IntlMessages id='common.login' />
          </Button>
        </div>
      </div>
    </AppAnimateGroup>
  );
};

export default Error401;
