import React, {Fragment} from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {ReactComponent as VearClothingLogoLight} from '../assets/icons/vear-logo-light.svg';

const useStyles = makeStyles((theme) => ({
  logoLight: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
}));

function AdminNavbar() {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();

  const BackToPreviousPage = () => history.goBack();

  const MenuIconButton = () => {
    if (location.pathname.match('/admin/product/insert')) {
      return (
        <IconButton edge="start" color="inherit" onClick={BackToPreviousPage}>
          <ArrowBackIcon/>
        </IconButton> 
      )
    };
    return (
      <IconButton edge="start" color="inherit">
        <MenuIcon/>
      </IconButton> 
    );
  }

  return (
    <Fragment>
      <AppBar position="sticky" elevation={1}>
        <Toolbar>
          <MenuIconButton/>
          <VearClothingLogoLight className={classes.logoLight}/>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
}

export default AdminNavbar;
