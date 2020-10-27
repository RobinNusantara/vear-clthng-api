import React, {Fragment} from 'react';
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
import useStyles from './navbar.styles';

function Navbar() {
  const classes = useStyles();

  return (
    <Fragment>
      <Appbar className={classes.root} elevation={0}>
        <Container>
          <Toolbar className={classes.toolbar}>
            <Link
              className={classes.logo}
              variant="h5"
              underline="none"
              to="/"
              component={RouterLink}>VEAR</Link>
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
              <IconButton className={classes.menu}>
                <RouterLink to="/favorites">
                  <Icon className={classes.icon} icon={outlineFavoriteBorder}/>
                </RouterLink>
              </IconButton>
              <IconButton className={classes.menu}>
                <RouterLink to="/cart">
                  <Icon className={classes.icon} icon={outlineShoppingBag}/>
                </RouterLink>
              </IconButton>
              <IconButton className={classes.menu}>
                <RouterLink to="/signin">
                  <Icon className={classes.icon} icon={bxUser}/>
                </RouterLink>
              </IconButton>
            </div>
          </Toolbar>
        </Container>
      </Appbar>
    </Fragment>
  );
};

export default Navbar;
