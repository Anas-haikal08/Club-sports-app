import React from 'react';
import Icon from '@ant-design/icons';

const MyMarkerIcon = (props: any) => {
  const MyMarkerSvg = () => (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="32" cy="32" r="32" fill="#E85500" fillOpacity="0.12" />
      <circle
        cx="31.5"
        cy="31.5"
        r="6"
        fill="#E85500"
        stroke="white"
        strokeWidth="3"
      />
    </svg>
  );
  return <Icon component={MyMarkerSvg} {...props} />;
};
export default MyMarkerIcon;
