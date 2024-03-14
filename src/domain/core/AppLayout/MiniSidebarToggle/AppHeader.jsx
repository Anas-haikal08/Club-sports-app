import React from 'react';
import {Layout, Row, Col} from 'antd';
import './index.style.less';
import {AiOutlineMenuFold, AiOutlineMenuUnfold} from 'react-icons/ai';
import PropTypes from 'prop-types';
import AppLanguageSwitcher from '../../AppLanguageSwitcher';
import Breadcrumb from './breadcrumb';
import UserInfo from '../components/UserInfo';
const {Header} = Layout;

const AppHeader = ({isCollapsed, onToggleSidebar}) => {
  return (
    <Header className='app-header-mini-sidebar'>
      <Row justify={'space-between'} align={'middle'} className={'fullContent'}>
        <Col span={12}>
          <Row align={'middle'}>
            {React.createElement(
              isCollapsed ? AiOutlineMenuUnfold : AiOutlineMenuFold,
              {
                className: 'trigger',
                onClick: onToggleSidebar,
              },
            )}
            <Breadcrumb />
          </Row>
        </Col>
        <Col span={12}>
          <Row gutter={8} align={'middle'} justify={'end'}>
            <Col>
              <AppLanguageSwitcher />
            </Col>
            <Col>
              <UserInfo />
            </Col>
          </Row>
        </Col>
      </Row>
    </Header>
  );
};

export default AppHeader;

AppHeader.propTypes = {
  isCollapsed: PropTypes.bool,
  onToggleSidebar: PropTypes.func,
};
