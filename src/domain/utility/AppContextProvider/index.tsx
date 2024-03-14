import React from 'react';
import PropTypes from 'prop-types';
import ThemeContextProvider from './ThemeContextProvider';
import LocaleContextProvider from './LocaleContextProvide';
import LayoutContextProvider from './LayoutContextProvider';
import SidebarContextProvider from './SidebarContextProvider';
import BreadcrumbContextProvider from './BreadcrumbContextProvider';

const AppContextProvider = ({children}: any) => {
  return (
    <ThemeContextProvider>
      <BreadcrumbContextProvider>
        <LocaleContextProvider>
          <LayoutContextProvider>
            <SidebarContextProvider>{children}</SidebarContextProvider>
          </LayoutContextProvider>
        </LocaleContextProvider>
      </BreadcrumbContextProvider>
    </ThemeContextProvider>
  );
};

export default AppContextProvider;

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
