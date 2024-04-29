import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';

import './AuthWrapper.style.less';

const AuthWrapper = ({ children }: any) => {
  return (
    <Row className='sign-in'>
      <Col xl={12} md={12} xs={24}>
        <Row className={'fullHeight'} align={'middle'}>
          <Col span={24}>{children}</Col>
        </Row>
      </Col>
    </Row>
  );
};

export default AuthWrapper;

AuthWrapper.propTypes = {
  children: PropTypes.node,
};
