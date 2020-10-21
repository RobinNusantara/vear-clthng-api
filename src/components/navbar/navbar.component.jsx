import React, {Fragment} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Appbar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
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
              variant="h6"
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
              <RouterLink to="/favorite" className={classes.menu}>
                <Icon
                  icon={outlineFavoriteBorder}
                  width={28} height={28}/>
              </RouterLink>
              <RouterLink to="/cart" className={classes.menu}>
                <Icon
                  icon={outlineShoppingBag}
                  width={28} height={28}/>
              </RouterLink>
              <RouterLink to="/signin" className={classes.menu}>
                <Icon
                  icon={bxUser}
                  width={28} height={28}/>
              </RouterLink>
            </div>
          </Toolbar>
        </Container>
      </Appbar>
    </Fragment>
  );
};

export default Navbar;
