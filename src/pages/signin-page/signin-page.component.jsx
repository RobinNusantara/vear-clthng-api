import React, {Fragment} from 'react';
import {Link as RouterLink, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {authUserSelector} from '../../utils/auth-selectors';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import PageWrapper from '../../components/container/container.component';
import LoginForm from '../../components/login-form/login-form.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import useStyles from './signin-page.styles';

function SignInPage() {
  const classes = useStyles();
  const user = useSelector(authUserSelector);

  return (
    <Fragment>
      {
        user ? <Redirect to='/user'/> :
        <Container>
          <PageWrapper>
            <div className={classes.root}>
              <div className={classes.paper}>
                <Typography className={classes.textHeader} variant="h6">
                  I already have an account
                </Typography>
                <Typography variant="subtitle1">
                  Sign in with email and password
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
                    variant="outlined">sign in with google</CustomButton>
                </div>
                <div className={classes.textFooter}>
                  <Typography variant="subtitle1">
                    Don&apos;t have an account?
                  </Typography>
                  <Link
                    underline="always"
                    variant="subtitle1"
                    to="/signup"
                    component={RouterLink}>Sign Up</Link>
                </div>
              </div>
            </div>
          </PageWrapper>
        </Container>
      }
    </Fragment>
  );
};

export default SignInPage;
