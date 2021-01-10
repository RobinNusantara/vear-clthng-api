import React, {Fragment} from 'react';
import {Link as RouterLink, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {authUserSelector} from '../../utils/auth-selectors';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import PageWrapper from '../../components/container/container.component';
import SignInForm from '../../components/signin-form/signin-form.component';
import MuiButton from '../../components/mui-button/mui-button.component';
import useStyles from '../../styles/signin-signup-page.styles';

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
                <Typography variant="body2">
                  Sign in with email and password
                </Typography>
                <SignInForm/>
                <div className={classes.divider}>
                  <hr className={classes.line}/>
                  <Typography className={classes.dividerText} variant="subtitle1">or</Typography>
                  <hr className={classes.line}/>
                </div>
                <div className={classes.button}>
                  <MuiButton
                    type="click"
                    width="100%"
                    variant="outlined">sign in with google</MuiButton>
                </div>
                <div className={classes.textFooter}>
                  <Typography className={classes.textSpacing} variant="body2">
                    Don&apos;t have an account?
                  </Typography>
                  <Link
                    underline="always"
                    variant="body2"
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
