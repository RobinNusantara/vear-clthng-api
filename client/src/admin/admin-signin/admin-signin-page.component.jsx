import React, {Fragment} from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AdminSignInForm from './admin-signin-form.component';
import useStyles from './admin-signin-page.styles';

function AdminSignIn() {
  const classes = useStyles();

  return (
    <Fragment>
      <div className={classes.root}>
        <div className={classes.wave}/>
          <div className={classes.content}>
            <Container>
              <Paper className={classes.boxes}>
                <Box className={classes.leftBox} padding={4}>
                  <div className={classes.imageContainer}>
                    <div className={classes.imageLeft}/>
                    <div className={classes.imageRight}/>
                    <div className={classes.imageCenter}/>
                  </div>
                </Box>
                <Box className={classes.rightBox} padding={4}>
                  <div className={classes.formBox}>
                    <Box height="100%" width={320} display="flex" alignItems="center">
                      <Box>
                        <Box>
                          <Typography variant="h6">HELLO,</Typography>
                        </Box>
                        <Box marginTop={1}>
                          <Typography variant="h6">WELCOME BACK</Typography>
                        </Box>
                        <Box marginTop={2}>
                          <AdminSignInForm/>
                        </Box>
                      </Box>
                    </Box>
                  </div>
                </Box>
              </Paper>
            </Container>
          </div>
      </div>
    </Fragment>
  );
}

export default AdminSignIn;
