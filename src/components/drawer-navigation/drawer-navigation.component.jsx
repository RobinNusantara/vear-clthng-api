import React, {Fragment} from 'react';
import {useLocation} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {ReactComponent as VearClothingLogoLight} from '../../assets/icons/vear-logo-light.svg';
import useStyles from './drawer-navigation.styles';

function MenuButton(location, classes) {
  if (location.pathname.match('/admin/products')) {
    return (
      <IconButton className={classes.menuButton}>
        <MenuIcon />
      </IconButton>
    );
  }
  return null;
}

function DrawerNavigation() {
  const classes = useStyles();
  const location = useLocation();

  return (
    <Fragment>
      <AppBar position="sticky" elevation={0}>
        <Toolbar>
          {MenuButton(location, classes)}
          <VearClothingLogoLight className={classes.logoLight}/>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
}

export default DrawerNavigation;
