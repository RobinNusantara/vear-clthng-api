import React, {Fragment} from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import useStyles from './home-page.styles';

function HomePage() {
  const classes = useStyles();
  return (
    <Fragment>
      <Container>
        <div className={classes.root}>
          <Grid container></Grid>
        </div>
      </Container>
    </Fragment>
  );
};

export default HomePage;
