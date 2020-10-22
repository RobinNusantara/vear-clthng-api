import React, {Fragment} from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import LoginForm from '../../components/login-form/login-form.component';
import useStyles from './signin-page.styles';

function SignInPage() {
  const classes = useStyles();
  const textHeader = 'i already have an account';
  const textSubtitle = 'sign in with email and password';

  return (
    <Fragment>
      <Container>
        <div className={classes.root}>
          <div className={classes.paper}>
            <Typography className={classes.header} variant="h6">
              {textHeader.toUpperCase()}
            </Typography>
            <Typography className={classes.subtitle} variant="subtitle1">
              {textSubtitle.toUpperCase()}
            </Typography>
            <LoginForm/>
          </div>
        </div>
      </Container>
    </Fragment>
  );
};

export default SignInPage;
