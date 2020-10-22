import React, {Fragment} from 'react';
import Typography from '@material-ui/core/Typography';
import {Icon} from '@iconify/react';
import trashOutline from '@iconify/icons-eva/trash-outline';
import useStyles from './header.styles';

function Header({textHeader, textSubtitle}) {
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
          <Icon className={classes.icon} icon={trashOutline}/>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
