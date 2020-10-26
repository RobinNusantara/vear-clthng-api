import React, {Fragment} from 'react';
import {Formik, Form} from 'formik';
import TextField from '../text-field/text-field.component';
import CustomButton from '../custom-button/custom-button.component';
import useStyles from './register-form.styles';

function RegisterForm() {
  const classes = useStyles();
  return (
    <Fragment>
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
        }}
        onSubmit={(values) => {
          console.log({values});
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
              color="primary">sign up</CustomButton>
          </Form>
        )}
      </Formik>
    </Fragment>
  );
};

export default RegisterForm;
