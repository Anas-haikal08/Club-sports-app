import {Button as ButtonAntd, ButtonProps} from 'antd';
import './index.style.less';

export declare type ButtonColors = 'green' | 'blue' | 'black';

interface IButtonProps extends ButtonProps {
  color?: ButtonColors;
}

const Button = (props: IButtonProps) => {
  return (
    <ButtonAntd
      {...props}
      className={`button-basic ${props.className ?? ''} ${props.color ? `${props.color}` : ''}`}>
      {props.children}
    </ButtonAntd>
  );
};
export default Button;
