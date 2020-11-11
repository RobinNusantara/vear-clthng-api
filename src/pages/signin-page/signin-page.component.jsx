import React, {Fragment} from 'react';
import {useFirebase} from 'react-redux-firebase';
import {Link as RouterLink, useHistory} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import PageWrapper from '../../components/container/container.component';
import LoginForm from '../../components/login-form/login-form.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import useStyles from './signin-page.styles';

function SignInPage() {
  const classes = useStyles();
  const history = useHistory();
  const firebase = useFirebase();

  const signInWithGoogle = () => {
    return firebase.login({
      provider: 'google',
      type: 'popup',
    }).then(() => history.push('/'));
  };

  return (
    <Fragment>
      <Container>
        <PageWrapper>
          <div className={classes.root}>
            <div className={classes.paper}>
              <Typography className={classes.textHeader} variant="h6">
                i already have an account
              </Typography>
              <Typography className={classes.textSubtitle} variant="subtitle1">
                sign in with email and password
              </Typography>
              <LoginForm/>
              <div className={classes.divider}>
                <hr className={classes.line}/>
                <Typography className={classes.dividerText} variant="subtitle1">or</Typography>
                <hr className={classes.line}/>
              </div>
              <div className={classes.button}>
                <CustomButton
                  type="click"
                  width="100%"
                  variant="outlined"
                  onClick={signInWithGoogle}>sign in with google</CustomButton>
              </div>
              <div className={classes.textFooter}>
                <Typography variant="subtitle1">
                  don&apos;t have an account?
                </Typography>
                <Link
                  underline="always"
                  variant="subtitle1"
                  to="/signup"
                  component={RouterLink}>sign up</Link>
              </div>
            </div>
          </div>
        </PageWrapper>
      </Container>
    </Fragment>
  );
};

export default SignInPage;
