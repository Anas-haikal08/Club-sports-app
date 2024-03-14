import React from 'react';
import {useNavigate} from 'react-router-dom';
import IntlMessages from '../../../domain/utility/IntlMessages';
import AppAnimateGroup from '../../../domain/core/AppAnimateGroup';
import {Button} from 'antd';
import '../index.style.less';
import AppPageMetadata from '../../../domain/core/AppPageMetadata';
import {ReactComponent as Logo} from '../../../assets/icon/maintenance.svg';
import {useIntl} from 'react-intl';

const Maintenance = () => {
  const navigate = useNavigate();
  const {messages} = useIntl();

  const onGoBackToHome = () => {
    navigate(-1);
  };

  return (
    <AppAnimateGroup type='bottom'>
      <AppPageMetadata title={messages['maintenance'].toString()} />
      <div className='error-container' key='a'>
        <div className='error-img-lg'>
          <Logo />
        </div>
        <div className='error-content error-content-lg'>
          <h3>
            <IntlMessages id='error.mantainanceMessage1' />
          </h3>
          <div className='error-para'>
            <p className='mb-0'>
              <IntlMessages id='error.mantainanceMessage2' />
            </p>
            <p className='mb-0'>
              <IntlMessages id='error.mantainanceMessage3' />.
            </p>
          </div>
          <Button type='primary' className='error-btn' onClick={onGoBackToHome}>
            <IntlMessages id='error.takeMeToHome' />
          </Button>
        </div>
      </div>
    </AppAnimateGroup>
  );
};

export default Maintenance;
