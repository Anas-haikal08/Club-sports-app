import MainUtils from 'src/shared/utils/main';

export const handleChangeLocales = (
  values: any,
  setFieldValue: (key: string, value: any) => void,
  fieldKey: string,
  languageId?: string,
  localeKey?: string,
  localeValue?: string,
) => {
  if (!MainUtils.isEmptyValue(values)) {
    let temp = values;
    const findIndex = temp?.findIndex(
      (locale: any) =>
        locale.languageId === languageId && locale.localeKey === localeKey,
    );
    if (findIndex > -1) {
      temp[findIndex] = {
        languageId: languageId,
        localeKey: localeKey,
        localeValue: localeValue,
      };
    } else {
      temp.push({
        languageId: languageId,
        localeKey: localeKey,
        localeValue: localeValue,
      });
    }
    setFieldValue(fieldKey, temp);
  } else {
    setFieldValue(fieldKey, [
      {
        languageId: languageId,
        localeKey: localeKey,
        localeValue: localeValue,
      },
    ]);
  }
};

export const getLocaleValue = (
  values: any,
  languageId?: string,
  localeKey?: string,
) => {
  return values?.find(
    (locale: any) =>
      locale.languageId === languageId && locale.localeKey === localeKey,
  )?.localeValue;
};
