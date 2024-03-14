import {Checkbox as CheckboxAntd, CheckboxProps} from 'antd';
import './index.style.less';

const Checkbox = (props: CheckboxProps) => {
  return (
    <CheckboxAntd {...props} className={`checkbox-basic ${props.className}`}>
      {props.children}
    </CheckboxAntd>
  );
};
export default Checkbox;
