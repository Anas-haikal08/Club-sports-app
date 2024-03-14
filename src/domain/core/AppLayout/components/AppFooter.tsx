import React from 'react';
import {Layout, Row, Col} from 'antd';
import './AppFooter.style.less';
import {useLayoutContext} from '../../../utility/AppContextProvider/LayoutContextProvider';

const {Footer} = Layout;

const AppFooter = () => {
  const {footer}: any = useLayoutContext();
  let year: any = new Date().getFullYear();

  if (footer) {
    return (
      <Footer className='app-main-footer'>
        <Row className={'row'} justify={'center'} align={'middle'}>
          <Col>
            <a href='#' target='_blank' rel='noopener noreferrer'>
              Copyright {' ' + year + ' '} Dashboard, All rights reserved.
            </a>
          </Col>
        </Row>
      </Footer>
    );
  }
  return null;
};

export default AppFooter;
