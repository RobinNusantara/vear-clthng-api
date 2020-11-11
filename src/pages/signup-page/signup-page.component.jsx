import React, {Fragment} from 'react';
import {useFirebase} from 'react-redux-firebase';
import {Link as RouterLink, useHistory} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import PageWrapper from '../../components/container/container.component';
import RegisterForm from '../../components/register-form/register-form.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import useStyles from './signup-page.styles';

function SignUpPage() {
  const classes = useStyles();
  const history = useHistory();
  const firebase = useFirebase();

  const signUpWithGoogle = () => {
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
                i don&apos;t have an account
              </Typography>
              <Typography className={classes.textSubtitle} variant="subtitle1">
                sign up with email and password
              </Typography>
              <RegisterForm/>
              <div className={classes.divider}>
                <hr className={classes.line}/>
                <Typography className={classes.dividerText} variant="subtitle1">or</Typography>
                <hr className={classes.line}/>
              </div>
              <div className={classes.button}>
                <CustomButton
                  type="click"
                  variant="outlined"
                  width="100%"
                  onClick={signUpWithGoogle}>sign up with google</CustomButton>
              </div>
              <div className={classes.textFooter}>
                <Typography variant="subtitle1">
                  already have an account?
                </Typography>
                <Link
                  underline="always"
                  variant="subtitle1"
                  to="/signin"
                  component={RouterLink}>sign in</Link>
              </div>
            </div>
          </div>
        </PageWrapper>
      </Container>
    </Fragment>
  );
};

export default SignUpPage;
