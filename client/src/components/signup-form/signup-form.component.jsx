import React, {Fragment} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {signUpWithEmailAndPassword} from '../../actions/auth.action';
import {authLoadingSelector, authSignUpErrorSelector} from '../../utils/auth-selectors';
import {Formik, Form} from 'formik';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';
import MuiTextField from '../mui-text-field/mui-text-field.component';
import MuiButton from '../mui-button/mui-button.component';
import {SignUpSchema} from '../../validation/form-validation';
import useStyles from '../../styles/signin-signup-form.styles';

function SignUpForm() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isLoading = useSelector(authLoadingSelector);
  const error = useSelector(authSignUpErrorSelector);

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
            <MuiTextField
              label="username"
              type="text"
              name="username"
              value={values.username}
              handleChange={handleChange}
              error={errors.username}/>
            <MuiTextField
              label="email"
              type="email"
              name="email"
              value={values.email}
              handleChange={handleChange}
              error={errors.email}/>
            <MuiTextField
              label="password"
              type="password"
              name="password"
              value={values.password}
              handleChange={handleChange}
              error={errors.password}/>
            <MuiTextField
              label="confirm password"
              type="password"
              name="confirmPassword"
              value={values.confirmPassword}
              handleChange={handleChange}
              error={errors.confirmPassword}/>
            <MuiButton
              type="submit"
              width="100%"
              variant="contained"
              color="primary"
              disabled={isLoading}>{
                isLoading ? <CircularProgress size={18}/> : 'sign up'
              }</MuiButton>
          </Form>
        )}
      </Formik>
    </Fragment>
  );
};

export default SignUpForm;
