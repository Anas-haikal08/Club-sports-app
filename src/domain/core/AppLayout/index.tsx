import React, {useEffect} from 'react';
import {Layout} from 'antd';
import {useUrlSearchParams} from 'use-url-search-params';
import './layout.style.less';
import {AppContentView} from '../../index';
import {LayoutType} from '../../../shared/constants/AppEnums';
import AppScrollbar from '../AppScrollbar';
import {
  useLayoutActionsContext,
  useLayoutContext,
} from '../../utility/AppContextProvider/LayoutContextProvider';
import {useSidebarActionsContext} from '../../utility/AppContextProvider/SidebarContextProvider';
import MiniSidebarToggle from './MiniSidebarToggle';
import {useSelector} from 'react-redux';
import {getIsAuthenticated} from 'src/domain/app/redux/auth/auth-selectors';

const AppLayout = () => {
  const isAuthenticated = useSelector(getIsAuthenticated);
  const {layoutType}: any = useLayoutContext();
  const {updateNavStyle}: any = useLayoutActionsContext();
  const {updateMenuStyle, setSidebarBgImage}: any = useSidebarActionsContext();
  const [params] = useUrlSearchParams();

  useEffect(() => {
    if (layoutType === LayoutType.BOXED) {
      document.body.classList.add('boxedLayout');
      document.body.classList.remove('framedLayout');
    } else if (layoutType === LayoutType.FRAMED) {
      document.body.classList.remove('boxedLayout');
      document.body.classList.add('framedLayout');
    } else {
      document.body.classList.remove('boxedLayout');
      document.body.classList.remove('framedLayout');
    }
  }, [layoutType]);

  useEffect(() => {
    if (params.layout) updateNavStyle(params.layout);
    if (params.menuStyle) updateMenuStyle(params.menuStyle);
    if (params.sidebarImage) setSidebarBgImage(true);
  }, []);

  return (
    <React.Fragment>
      {isAuthenticated ? (
        <MiniSidebarToggle />
      ) : (
        <Layout className='auth'>
          <AppScrollbar className='main-auth-scrollbar'>
            <AppContentView />
          </AppScrollbar>
        </Layout>
      )}
    </React.Fragment>
  );
};

export default React.memo(AppLayout);
