import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {signUpWithEmailAndPassword} from '../../actions/auth.action';
import {Formik, Form} from 'formik';
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '../text-field/text-field.component';
import CustomButton from '../custom-button/custom-button.component';
import {SignUpSchema} from '../../validation/form-validation';
import useStyles from './register-form.styles';

function RegisterForm({signUp, isLoading, error}) {
  const classes = useStyles();

  return (
    <Fragment>
      <Formik
        initialValues={{
          displayName: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={SignUpSchema}
        onSubmit={async (values) => {
          await signUp(values);
        }}>{({values, handleChange, errors}) => (
          <Form className={classes.root}>
            {error && <Alert
              className={classes.error}
              severity="error"
              icon={false}>{error}</Alert>}
            <TextField
              label="display name"
              type="text"
              name="displayName"
              value={values.displayName}
              handleChange={handleChange}
              error={errors.displayName}/>
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

const mapStateToProps = (state) => {
  return {
    isLoading: state.auth.isLoading,
    error: state.auth.signUpError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (values) => dispatch(signUpWithEmailAndPassword(values)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
