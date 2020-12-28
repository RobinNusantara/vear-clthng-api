import React, {Fragment} from 'react';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import {Icon} from '@iconify/react';
import trashOutline from '@iconify/icons-eva/trash-outline';
import useStyles from './header.styles';

function Header({collection, title, iconButton}) {
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.root}>
        <div className={classes.leftBox}>
          <Typography className={classes.textHeader} variant="h6">
            {title}
          </Typography>
          <Typography
            className={classes.textSubtitle}
            variant="subtitle1"
            color="textSecondary">
            {collection.length} Items
          </Typography>
        </div>
        <div className={classes.rightBox}>
          <IconButton className={classes.icon}>
            <Icon
              height={24}
              width={24}
              icon={trashOutline}/>
          </IconButton>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
