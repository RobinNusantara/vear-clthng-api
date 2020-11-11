import React, {Fragment, useState} from 'react';
import {useFirebase} from 'react-redux-firebase';
import {useHistory} from 'react-router-dom';
import {Formik, Form} from 'formik';
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '../text-field/text-field.component';
import CustomButton from '../custom-button/custom-button.component';
import {SignUpSchema} from '../../helpers/helpers';
import useStyles from './register-form.styles';

function RegisterForm() {
  const classes = useStyles();
  const history = useHistory();
  const firebase = useFirebase();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  async function signUpWithEmailAndPassword(credentials) {
    return await firebase.createUser(
        {email: credentials.email, password: credentials.password},
        {
          avatarUrl: '',
          displayName: credentials.displayName,
          email: credentials.email,
        })
        .then(() => history.push('/'))
        .catch((error) => setError(error.message));
  }

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
          setError('');
          setIsLoading(true);
          await signUpWithEmailAndPassword(values);
          setIsLoading(false);
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

export default RegisterForm;
