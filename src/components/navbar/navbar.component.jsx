import React, {Fragment} from 'react';
import {useSelector} from 'react-redux';
import {isLoaded, isEmpty} from 'react-redux-firebase';
import {Link as RouterLink} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Appbar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import {Icon} from '@iconify/react';
import bxUser from '@iconify/icons-bx/bx-user';
import outlineFavoriteBorder from '@iconify/icons-ic/baseline-favorite-border';
import outlineShoppingBag from '@iconify/icons-ic/outline-shopping-bag';
import {ReactComponent as VearClothingLogoDark} from '../../assets/icons/vear-logo-dark.svg';
import {ReactComponent as VearClothingLogoLight} from '../../assets/icons/vear-logo-light.svg';
import useStyles from './navbar.styles';

function Navbar() {
  const classes = useStyles();
  const auth = useSelector((state) => state.firebase.auth);

  return (
    <Fragment>
      <Appbar className={classes.root} elevation={0}>
        <Container>
          <Toolbar className={classes.toolbar}>
            <Link
              variant="h5"
              underline="none"
              to="/"
              component={RouterLink}>
              <VearClothingLogoDark className={classes.logoDark}/>
              <VearClothingLogoLight className={classes.logoLight}/>
            </Link>
            <div className={classes.menus}>
              <Link
                className={classes.menu}
                variant="h6"
                underline="none"
                to="/collections"
                component={RouterLink}>SHOP</Link>
              <Link
                className={classes.menu}
                variant="h6"
                underline="none"
                to="/contact"
                component={RouterLink}>CONTACT</Link>
              <RouterLink to="/favorites">
                <IconButton className={classes.menu}>
                  <Icon className={classes.icon} icon={outlineFavoriteBorder}/>
                </IconButton>
              </RouterLink>
              <RouterLink to="/cart">
                <IconButton className={classes.menu}>
                  <Icon className={classes.icon} icon={outlineShoppingBag}/>
                </IconButton>
              </RouterLink>
              <RouterLink to={isLoaded(auth) && !isEmpty(auth) ? '/user' : '/signin'}>
                <IconButton className={classes.menu}>
                  <Icon className={classes.icon} icon={bxUser}/>
                </IconButton>
              </RouterLink>
            </div>
          </Toolbar>
        </Container>
      </Appbar>
    </Fragment>
  );
};

export default Navbar;
