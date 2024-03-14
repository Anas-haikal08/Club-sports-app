import {passwordRegex} from 'src/shared/constants/AppConst';

export const isPasswordValid = (password?: string) => {
  const isValid = new RegExp(passwordRegex).test(password ?? '');
  return isValid;
};
