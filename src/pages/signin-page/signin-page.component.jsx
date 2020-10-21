import React, {Fragment} from 'react';
import Container from '@material-ui/core/Container';
import LoginForm from '../../components/login-form/login-form.component';

function SignInPage() {
  return (
    <Fragment>
      <Container>
        <LoginForm/>
      </Container>
    </Fragment>
  );
};

export default SignInPage;
