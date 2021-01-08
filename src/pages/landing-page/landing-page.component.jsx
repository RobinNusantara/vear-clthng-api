import React, {Fragment} from 'react';
import {useHistory} from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
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
          <div className={classes.button}>
            <Link
              className={classes.link}
              variant="body1"
              component="button"
              onClick={moveToShopPage}>Shop Now</Link>
          </div>
        </div>
      </section>
      <Footer/>
    </Fragment>
  );
}

export default LandingPage;
