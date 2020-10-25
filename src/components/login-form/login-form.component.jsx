import React, {Fragment} from 'react';
import {Formik, Form} from 'formik';
import TextField from '../text-field/text-field.component';
import CustomButton from '../custom-button/custom-button.component';
import {SignInSchema} from '../../helpers/helpers';
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
        validationSchema={SignInSchema}
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
            <CustomButton
              type="submit"
              width="100%"
              variant="contained"
              color="primary">sign in</CustomButton>
          </Form>
        )}
      </Formik>
    </Fragment>
  );
};

export default LoginForm;
