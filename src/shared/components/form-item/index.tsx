import * as React from 'react';
import {Col, Row, Tooltip, Typography} from 'antd';
import {BsQuestionCircle} from 'react-icons/bs';
import './index.style.less';
import {useFormikContext} from 'formik';
import {useIntl} from 'react-intl';
import {validationInputNumber} from 'src/shared/functions/validation/validation-input-number';
import {isPasswordValid} from 'src/shared/functions/validation/validation-password';

export interface IFormItemProps {
  name?: string;
  type?: React.HTMLInputTypeAttribute;
  layoutHorizontal?: boolean;
  span?: number;
  label?: string;
  isTooltip?: boolean;
  titleTooltip?: string;
  fieldCommponent: any;
  labelSpan?: number;
  classNameTitle?: string;
  onChange?: Function;
}

const FormItem = (props: IFormItemProps) => {
  const {
    name,
    type,
    label,
    layoutHorizontal,
    isTooltip,
    titleTooltip,
    fieldCommponent,
    span,
    labelSpan,
    classNameTitle,
    onChange,
  } = props;

  const {setFieldValue, values, errors, setFieldError} =
    useFormikContext<any>();

  const {messages} = useIntl();
  return (
    <Row gutter={[10, 3]} align='middle'>
      {layoutHorizontal ? (
        <>
          {label && (
            <Col span={24}>
              <div>
                <Typography.Title
                  level={5}
                  className={`title inline-block ${classNameTitle}`}>
                  {label} &nbsp;
                </Typography.Title>
                {isTooltip && (
                  <Tooltip title={titleTooltip}>
                    <BsQuestionCircle />
                  </Tooltip>
                )}
              </div>
            </Col>
          )}
          <Col span={24} className='break-validations'>
            <div>
              {React.cloneElement(fieldCommponent, {
                value: values[`${name}`],
                onChange: (value: any, info: any) => {
                  if (type === 'number') {
                    if (validationInputNumber(value?.target?.value)) {
                      setFieldValue(`${name}`, value?.target?.value);
                    } else setFieldValue(`${name}`, '');
                  } else {
                    setFieldValue(
                      `${name}`,
                      type === 'checkbox'
                        ? value?.target?.checked
                        : value?.target?.value ?? value,
                    );
                  }
                  if (type === 'password') {
                    if (!isPasswordValid(value?.target?.value)) {
                      setFieldError(
                        `${name}`,
                        messages['validation.passwordRule'].toString(),
                      );
                    } else {
                      setFieldError(`${name}`, '');
                    }
                  }
                  onChange && onChange(value, info ?? undefined);
                },
              })}
            </div>
            {name && errors && (
              <Typography.Text type='danger'>
                <>{errors[`${name}`]}</>
              </Typography.Text>
            )}
          </Col>
        </>
      ) : (
        <>
          <Col span={labelSpan ?? 6}>
            <div className='title-container'>
              <Typography.Title level={5} className='inline-block'>
                {label} &nbsp;
              </Typography.Title>
              {isTooltip && (
                <Tooltip title={titleTooltip}>
                  <BsQuestionCircle />
                </Tooltip>
              )}
            </div>
          </Col>
          <Col span={span ?? 14} className='breakV-validations'>
            <div>
              {React.cloneElement(fieldCommponent, {
                onChange: (value: any) => {
                  setFieldValue(`${name}`, value.target.value);
                },
              })}
            </div>
            {name && errors && (
              <Typography.Text type='danger'>
                <>{errors[`${name}`]}</>
              </Typography.Text>
            )}
          </Col>
        </>
      )}
    </Row>
  );
};

export default FormItem;
