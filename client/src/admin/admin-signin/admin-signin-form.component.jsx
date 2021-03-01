import React, {Fragment} from 'react';
import {Formik, Form} from 'formik';
import {SignInSchema} from '../../validation/form-validation';
import MuiTextField from '../../components/mui-text-field/mui-text-field.component';
import MuiButton from '../../components/mui-button/mui-button.component';

function AdminSignInForm() {
  return (
    <Fragment>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={SignInSchema}
        onSubmit={(values) => {
          console.log(values);
        }}>{({values, handleChange, errors}) => (
          <Form>
            <MuiTextField
              label="Email"
              type="email"
              name="email"
              value={values.email}
              handleChange={handleChange}
              error={errors.email}/>
            <MuiTextField
              label="Password"
              type="password"
              name="password"
              value={values.password}
              handleChange={handleChange}
              error={errors.password}/>
            <MuiButton
              type="submit"
              color="primary"
              variant="contained"
              width="100%">Sign In</MuiButton>
          </Form>
        )}
      </Formik>
    </Fragment>
  );
}

export default AdminSignInForm;
