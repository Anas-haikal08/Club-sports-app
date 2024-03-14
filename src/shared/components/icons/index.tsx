import {Image} from 'antd';
import {useIntl} from 'react-intl';
import './index.style.less';
import GoogleIconSVG from 'src/assets/icon/logo-google.svg';

declare type SafeNumber = number | `${number}`;

interface IconProps {
  className?: string;
  width?: SafeNumber | undefined;
  height?: SafeNumber | undefined;
  onClick?: () => void;
}
const GoogleIcon: React.FC<IconProps> = (props) => {
  const {messages} = useIntl();
  return (
    <Image
      src={GoogleIconSVG}
      alt={messages['common.google'].toString()}
      width={17.25}
      height={17.25}
      preview={false}
      className={`${props.className ?? ''}`}
      {...props}
    />
  );
};

export {GoogleIcon};
