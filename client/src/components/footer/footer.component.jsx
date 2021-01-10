import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import {ReactComponent as VearClothingLogoLight} from '../../assets/icons/vear-logo-light.svg';
import useStyles from './footer.styles';

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Container>
        <div className={`${classes.section} ${classes.border}`}>
          <VearClothingLogoLight/>
        </div>
        <div className={classes.section}>
          <Typography className={classes.text} variant="body2">
            &copy; 2020 Vear Inc. All rights reserved
          </Typography>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
