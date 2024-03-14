import React, {useState, useEffect, useRef} from 'react';
import {useLocation, Link} from 'react-router-dom';
import {Breadcrumb as AntdBreadcrumb} from 'antd';
import {useBreadcrumbContext} from '../../../../utility/AppContextProvider/BreadcrumbContextProvider';

const Breadcrumb = () => {
  const location = useLocation();
  const {breadcrumb}: any = useBreadcrumbContext();
  const [breadcrumbConfigs, setBreadcrumbConfigs]: any = useState([]);

  const breadcrumbItems = useRef([]);

  useEffect(() => {
    const pathSnippets = location.pathname.split('/').filter((i) => i);

    if (breadcrumb?.length === 0) {
      const breadcrumbConfigs = pathSnippets.map((value: any, index: any) => {
        return {
          text: value.charAt(0).toUpperCase() + value.slice(1),
          url: `/${pathSnippets.slice(0, index + 1).join('/')}`,
        };
      });
      setBreadcrumbConfigs(breadcrumbConfigs);
    } else {
      setBreadcrumbConfigs(breadcrumb);
    }
  }, [location, breadcrumb]);
  breadcrumbItems.current = breadcrumbConfigs?.map(
    (config: any, index: any) => {
      return (
        <AntdBreadcrumb.Item key={index}>
          {config.render ? (
            config.render
          ) : (
            <Link to={config.url}>{config.text}</Link>
          )}
        </AntdBreadcrumb.Item>
      );
    },
  );

  return (
    <AntdBreadcrumb separator='>'>{breadcrumbItems.current}</AntdBreadcrumb>
  );
};

export default Breadcrumb;
