import React, {createContext, useContext, useState} from 'react';
import PropTypes from 'prop-types';

// @ts-ignore
const BreadcrumbContext = createContext();
export const useBreadcrumbContext = () => useContext(BreadcrumbContext);
type props = {
  text: string;
  url: string;
  render?: any;
};
const BreadcrumbContextProvider = ({children}: any) => {
  const [breadcrumb, setBreadcrumb] = useState<Array<props>>([]);

  return (
    <BreadcrumbContext.Provider
      value={{
        breadcrumb,
        setBreadcrumb,
      }}>
      {children}
    </BreadcrumbContext.Provider>
  );
};

export default BreadcrumbContextProvider;

BreadcrumbContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
