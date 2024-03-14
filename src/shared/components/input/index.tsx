import {
  Input as InputAntd,
  InputNumber as InputNumberAntd,
  InputNumberProps,
  InputProps,
} from 'antd';
import './index.style.less';

export const Input = (props: InputProps) => {
  return (
    <InputAntd
      {...props}
      className={`fullContent input-basic ${props.className}`}
    />
  );
};

export const InputPassword = (props: InputProps) => {
  return (
    <InputAntd.Password
      {...props}
      className={`fullContent input-password-basic ${props.className}`}
    />
  );
};

export const InputNumber = (props: InputNumberProps) => {
  return (
    <InputNumberAntd
      {...props}
      className={`fullContent input-number-basic ${props.className}`}
    />
  );
};
