import React, {Fragment, useState} from 'react';
import {useFirebase} from 'react-redux-firebase';
import {useHistory} from 'react-router-dom';
import {Formik, Form} from 'formik';
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
import TextField from '../text-field/text-field.component';
import CustomButton from '../custom-button/custom-button.component';
import {SignInSchema} from '../../helpers/helpers';
import useStyles from './login-form.styles';

function LoginForm() {
  const classes = useStyles();
  const history = useHistory();
  const firebase = useFirebase();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  async function signInWithEmailAndPassword(credentials) {
    return await firebase.login({email: credentials.email, password: credentials.password})
        .then(() => history.push('/'))
        .catch((error) => setError(error.message));
  };

  return (
    <Fragment>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={SignInSchema}
        onSubmit={async (values) => {
          setError('');
          setIsLoading(true);
          await signInWithEmailAndPassword(values);
          setIsLoading(false);
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
