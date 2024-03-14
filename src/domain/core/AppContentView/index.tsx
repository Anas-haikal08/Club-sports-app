import React from 'react';
import {Layout} from 'antd';
import {AppSuspense} from '../../index';
import {
  anonymousStructure,
  authorizedStructure,
  unAuthorizedStructure,
} from '../../../pages';
import AppErrorBoundary from '../AppErrorBoundary';
import './index.style.less';
import GenerateRoutes from '../../utility/RouteGenerator';
import {Navigate, Route, Routes} from 'react-router-dom';
import {AUTH_TOKEN, initialUrl} from '../../../shared/constants/AppConst';
import {useCookies} from 'react-cookie';

const {Content} = Layout;

const AppContentView = () => {
  const [cookies] = useCookies([AUTH_TOKEN]);

  return (
    <Content className='main-content-view'>
      <AppSuspense>
        <AppErrorBoundary>
          {GenerateRoutes({
            isAuthenticated: !!cookies[AUTH_TOKEN],
            userRole: undefined,
            unAuthorizedStructure,
            authorizedStructure,
            anonymousStructure,
          })}
          <Routes>
            <Route path='/' element={<Navigate to={initialUrl} replace />} />
          </Routes>
        </AppErrorBoundary>
      </AppSuspense>
    </Content>
  );
};

export default AppContentView;
