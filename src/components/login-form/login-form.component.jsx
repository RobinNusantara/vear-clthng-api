import React, {Fragment} from 'react';
import {Formik, Form} from 'formik';
import TextField from '../text-field/text-field.component';
import useStyles from './login-form.styles';

function LoginForm() {
  const classes = useStyles();
  return (
    <Fragment>
      <Formik
        initialValues={{
          email: '',
          password: '',
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
              type="email"
              name="email"
              value={values.password}
              handleChange={handleChange}
              error={errors.email}/>
          </Form>
        )}
      </Formik>
    </Fragment>
  );
};

export default LoginForm;
