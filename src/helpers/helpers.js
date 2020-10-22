import * as Yup from 'yup';

const ValidationSchema = Yup.object().shape({
  displayName: Yup.string()
      .min(2, 'Display name is too short!')
      .max(50, 'Display name too long!')
      .required('Required'),
  email: Yup.string()
      .email('Invalid email')
      .required('Required'),
  password: Yup.string()
      .min(6, 'Password is too short!')
      .required('Required'),
  confirmPassword: Yup.string()
      .required()
      .test('', 'Passwords do not match', (value) => this.parent.password === value),
});

export default ValidationSchema;
