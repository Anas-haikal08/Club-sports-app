import React from 'react';
import PropTypes from 'prop-types';
import SimpleBarReact from 'simplebar-react';
import 'simplebar/src/simplebar.css';
import './index.style.less';

const AppScrollbar: React.FunctionComponent<any> = ({
  children,
  className,
  ...others
}: any) => {
  return (
    <SimpleBarReact {...others} className={className}>
      {children}
    </SimpleBarReact>
  );
};

export default AppScrollbar;

AppScrollbar.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  scrollToTop: PropTypes.bool,
};
