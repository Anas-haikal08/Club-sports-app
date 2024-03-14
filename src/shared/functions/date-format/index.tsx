import moment from 'moment';
import MainUtils from 'src/shared/utils/main';

export const dateFormat = (value: string, formatName?: string) => {
  if (!MainUtils.isEmptyValue(value))
    return value.endsWith('Z')
      ? moment(new Date(value)).format(formatName)
      : moment(new Date(`${value}Z`)).format(formatName);
  else return '-';
};
