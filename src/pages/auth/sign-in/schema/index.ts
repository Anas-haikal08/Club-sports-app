import * as Yup from 'yup';

export const signInSchema = (messages: any) =>
  Yup.object().shape({
    email: Yup.string()
      .email(messages['validation.emailRule'].toString())
      .required(messages['validation.emailRequired'].toString()),
    password: Yup.string().required(
      messages['validation.passwordRequired'].toString(),
    ),
  });
