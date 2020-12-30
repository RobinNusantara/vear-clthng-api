import React, {Fragment} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {signInWithEmailAndPassword} from '../../actions/auth.action';
import {authLoadingSelector, authSignInErrorSelector} from '../../utils/auth-selectors';
import {Formik, Form} from 'formik';
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '../text-field/text-field.component';
import CustomButton from '../custom-button/custom-button.component';
import {SignInSchema} from '../../validation/form-validation';
import useStyles from './login-form.styles';

function LoginForm() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isLoading = useSelector(authLoadingSelector);
  const error = useSelector(authSignInErrorSelector);

  return (
    <Fragment>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={SignInSchema}
        onSubmit={(values) => {
          dispatch(signInWithEmailAndPassword(values));
        }}>{({values, handleChange, errors}) => (
          <Form className={classes.root}>
            {error && <Alert
              className={classes.error}
              severity="error"
              icon={false}>{error}</Alert>}
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
            <CustomButton
              type="submit"
              width="100%"
              variant="contained"
              color="primary"
              disabled={isLoading}>{
                isLoading ? <CircularProgress size={18}/> : 'sign in'
              }</CustomButton>
          </Form>
        )}
      </Formik>
    </Fragment>
  );
};

export default LoginForm;
