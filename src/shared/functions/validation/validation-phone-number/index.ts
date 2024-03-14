import parsePhoneNumberFromString from 'libphonenumber-js';
import MainUtils from 'src/shared/utils/main';

export const isPhoneNumberValid = (phoneNumber: string, code: any) => {
  try {
    if (!MainUtils.isEmptyValue(phoneNumber) && phoneNumber?.length > 7)
      return parsePhoneNumberFromString(
        phoneNumber,
        code?.countryCode,
      )?.isValid();
  } catch (error) {
    return false;
  }
};
