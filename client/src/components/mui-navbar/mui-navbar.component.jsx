import React, {Fragment} from 'react';
import {Link as RouterLink, useLocation, useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {authUserSelector} from '../../utils/auth-selectors';
import Container from '@material-ui/core/Container';
import Appbar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import {Icon} from '@iconify/react';
import bxUser from '@iconify/icons-bx/bx-user';
import outlineFavoriteBorder from '@iconify/icons-ic/baseline-favorite-border';
import outlineShoppingBag from '@iconify/icons-ic/outline-shopping-bag';
import arrowBackOutline from '@iconify/icons-eva/arrow-back-outline';
import {ReactComponent as VearClothingLogoDark} from '../../assets/icons/vear-logo-dark.svg';
import {ReactComponent as VearClothingLogoLight} from '../../assets/icons/vear-logo-light.svg';
import useStyles from './mui-navbar.styles';

function Navbar() {
  const classes = useStyles();
  const user = useSelector(authUserSelector);
  const location = useLocation();
  const history = useHistory();

  const backToPreviousPage = () => history.goBack();

  const BackButton = () => {
    if (location.pathname.match('product')) {
      return (
        <IconButton className={classes.backButton} edge="start" onClick={backToPreviousPage}>
          <Icon className={classes.backIcon} icon={arrowBackOutline} />
        </IconButton>
      );
    }
    return null;
  };

  return (
    <Fragment>
      <Appbar className={classes.root} elevation={0}>
        <Container>
          <Toolbar className={classes.toolbar}>
            {BackButton()}
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
                className={classes.textButton}
                variant="h6"
                underline="none"
                to="/"
                component={RouterLink}>SHOP</Link>
              <Link
                className={classes.textButton}
                variant="h6"
                underline="none"
                to="/contact"
                component={RouterLink}>CONTACT</Link>
              <RouterLink to="/favorites">
                <Tooltip title="Favorites">
                  <IconButton>
                    <Icon className={classes.icon} icon={outlineFavoriteBorder}/>
                  </IconButton>
                </Tooltip>
              </RouterLink>
              <RouterLink to="/cart">
                <Tooltip title="Cart">
                  <IconButton>
                    <Icon className={classes.icon} icon={outlineShoppingBag}/>
                  </IconButton>
                </Tooltip>
              </RouterLink>
              <RouterLink to={user ? '/user' : '/signin'}>
                <Tooltip title={user ? 'Account' : 'Sign In'}>
                  <IconButton>
                    <Icon className={classes.icon} icon={bxUser}/>
                  </IconButton>
                </Tooltip>
              </RouterLink>
            </div>
          </Toolbar>
        </Container>
      </Appbar>
    </Fragment>
  );
};

export default Navbar;
