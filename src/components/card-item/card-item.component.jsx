import React, {Fragment} from 'react';
import Typography from '@material-ui/core/Typography';
import useStyles from './card-item.styles';

function CardItem() {
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.root}>
        <div className={classes.cardHeader}></div>
        <div className={classes.cardFooter}>
          <Typography
            className={classes.textHeader}
            variant="subtitle1">
            PRODUCT NAME
          </Typography>
          <div className={classes.divider}></div>
          <Typography
            className={classes.textSubtitle}
            variant="subtitle1"
            color="textSecondary">
            PRICE
          </Typography>
        </div>
      </div>
    </Fragment>
  );
};

export default CardItem;
