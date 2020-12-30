import * as Yup from 'yup';

export const SignInSchema = Yup.object().shape({
  email: Yup.string()
      .email('Invalid email address')
      .required('Required'),
  password: Yup.string()
      .required('Required'),
});

export const SignUpSchema = Yup.object().shape({
  username: Yup.string()
      .required('Required'),
  email: Yup.string()
      .email()
      .required('Required'),
  password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Required'),
  confirmPassword: Yup.string()
      .when('password', {
        is: (password) => (password && password.length > 0 ? true : false),
        then: Yup.string().oneOf([Yup.ref('password')], 'Password doesn\'t match'),
      })
      .required('Required'),
});
