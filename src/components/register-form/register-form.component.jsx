import React, {Fragment} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {signUpWithEmailAndPassword} from '../../actions/auth.action';
import {authSignUpErrorSelector, authLoadingSelector} from '../../utils/auth-selectors';
import {Formik, Form} from 'formik';
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '../text-field/text-field.component';
import CustomButton from '../custom-button/custom-button.component';
import {SignUpSchema} from '../../validation/form-validation';
import useStyles from './register-form.styles';

function RegisterForm() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const error = useSelector(authSignUpErrorSelector);
  const isLoading = useSelector(authLoadingSelector);

  return (
    <Fragment>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={SignUpSchema}
        onSubmit={(values) => {
          dispatch(signUpWithEmailAndPassword(values));
        }}>{({values, handleChange, errors}) => (
          <Form className={classes.root}>
            {error && <Alert
              className={classes.error}
              severity="error"
              icon={false}>{error}</Alert>}
            <TextField
              label="username"
              type="text"
              name="username"
              value={values.username}
              handleChange={handleChange}
              error={errors.username}/>
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
                isLoading ? <CircularProgress size={18}/> : 'sign up'
              }</CustomButton>
          </Form>
        )}
      </Formik>
    </Fragment>
  );
};

export default RegisterForm;
