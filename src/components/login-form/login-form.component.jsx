import React, {Fragment, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Formik, Form} from 'formik';
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
import {useAuthContext} from '../../providers/auth-provider';
import TextField from '../text-field/text-field.component';
import CustomButton from '../custom-button/custom-button.component';
import {SignInSchema} from '../../helpers/helpers';
import useStyles from './login-form.styles';

function LoginForm() {
  const classes = useStyles();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const {signInWithEmailAndPassword} = useAuthContext();

  return (
    <Fragment>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={SignInSchema}
        onSubmit={async (values) => {
          try {
            setError('');
            setIsLoading(true);
            await signInWithEmailAndPassword(values.email, values.password);
            history.push('/');
          } catch (error) {
            setError(error.message);
          }
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
