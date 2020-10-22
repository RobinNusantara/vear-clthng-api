import React, {Fragment} from 'react';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import useStyles from './header.styles';

function Header({textHeader, textSubtitle, iconButton}) {
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.root}>
        <div className={classes.leftBox}>
          <Typography className={classes.textHeader} variant="h6">
            {textHeader}
          </Typography>
          <Typography className={classes.textSubtitle} variant="subtitle1">
            {textSubtitle} ITEMS
          </Typography>
        </div>
        <div className={classes.rightBox}>
          <IconButton>{iconButton}</IconButton>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
