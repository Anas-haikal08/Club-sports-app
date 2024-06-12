import React from 'react';
import { Layout } from 'antd';
import { AppSuspense } from '../../index';
import {
  anonymousStructure,
  authorizedStructure,
  unAuthorizedStructure,
} from '../../../pages';
import AppErrorBoundary from '../AppErrorBoundary';
import './index.style.less';
import GenerateRoutes from '../../utility/RouteGenerator';
import { Navigate, Route, Routes } from 'react-router-dom';
import { initialUrl } from '../../../shared/constants/AppConst';
import { useAuth } from 'src/pages/auth/context/AuthContext';  // Import the useAuth hook

const { Content } = Layout;

const AppContentView = () => {
  const { isAuthenticated } = useAuth(); // Use the isAuthenticated value from AuthContext

  return (
    <Content className='main-content-view'>
      <AppSuspense>
        <AppErrorBoundary>
          {GenerateRoutes({
            isAuthenticated: isAuthenticated, // Use isAuthenticated from AuthContext
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
