import React, {Fragment, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Formik, Form} from 'formik';
import {useAuthContext} from '../../providers/auth-provider';
import TextField from '../text-field/text-field.component';
import CustomButton from '../custom-button/custom-button.component';
import {SignUpSchema} from '../../helpers/helpers';
import useStyles from './register-form.styles';

function RegisterForm() {
  const classes = useStyles();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const {signUpWithEmailAndPassword} = useAuthContext();

  return (
    <Fragment>
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={SignUpSchema}
        onSubmit={async (values) => {
          try {
            setError('');
            setIsLoading(true);
            await signUpWithEmailAndPassword(values.email, values.password);
            history.push('/');
          } catch {
            setError('');
            console.log(error);
          }
          setIsLoading(false);
        }}>{({values, handleChange, errors}) => (
          <Form className={classes.root}>
            <TextField
              label="email"
              type="email"
              name="email"
              value={values.email}
              handleChange={handleChange}
              error={errors.email}/>
            <TextField
              label="password"
              type="password"
              name="password"
              value={values.password}
              handleChange={handleChange}
              error={errors.password}/>
            <TextField
              label="confirm password"
              type="password"
              name="confirmPassword"
              value={values.confirmPassword}
              handleChange={handleChange}
              error={errors.confirmPassword}/>
            <CustomButton
              type="submit"
              width="100%"
              variant="contained"
              color="primary"
              disabled={isLoading}>{
                isLoading ? 'sign up...' : 'sign up'
              }</CustomButton>
          </Form>
        )}
      </Formik>
    </Fragment>
  );
};

export default RegisterForm;
