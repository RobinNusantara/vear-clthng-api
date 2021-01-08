import React, {Fragment} from 'react';
import {useHistory} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from './components/button/button.component';
import Footer from '../../components/footer/footer.component';
import useStyles from './landing-page.styles';

function LandingPage() {
  const classes = useStyles();
  const history = useHistory();

  const moveToShopPage = () => history.push('/shop');

  return (
    <Fragment>
      <section className={classes.firstSection}>
        <div className={classes.background}/>
        <div className={classes.content}>
          <Typography className={classes.title} variant="h4">Checkout Today</Typography>
          <Typography className={classes.title} variant="h4">Wear Tomorrow</Typography>
          <Button margin={2} handleClick={moveToShopPage}>Shop Now</Button>
        </div>
      </section>
      <section className={classes.secondSection}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <div className={classes.directory}>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className={classes.directory}></div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className={classes.directory}></div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className={classes.directory}></div>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className={classes.thirdSection}>
        <div className={classes._background}/>
        <div className={classes.content}>
          <Typography className={classes.title} variant="h4">Join us now!</Typography>
          <Button margin={2} handleClick={() => history.push('/signup')}>Sign Up</Button>
        </div>
      </section>
      <section className={classes.fourthSection}></section>
      <Footer/>
    </Fragment>
  );
}

export default LandingPage;
