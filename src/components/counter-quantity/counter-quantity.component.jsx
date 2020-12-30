import React, {Fragment} from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import {Icon} from '@iconify/react';
import plusOutline from '@iconify/icons-eva/plus-outline';
import minusOutline from '@iconify/icons-eva/minus-outline';
import useStyles from './counter-quantity.styles';

function CounterQuantity({item}) {
  const classes = useStyles();

  return (
    <Fragment>
      <div className={classes.root}>
        <Paper elevation={0} className={classes.paper}>
          <IconButton
            size="small"
            disabled={item.productQuantity <= 1 ? true : false}
            onClick={(event) => {
              event.preventDefault();
            }}>
            <Icon className={classes.icon} icon={minusOutline}/>
          </IconButton>
        </Paper>
        <Typography className={classes.counter} variant="subtitle1">
          {item.productQuantity}
        </Typography>
        <Paper elevation={0} className={classes.paper}>
          <IconButton
            size="small"
            onClick={(event) => {
              event.preventDefault();
            }}>
            <Icon className={classes.icon} icon={plusOutline}/>
          </IconButton>
        </Paper>
      </div>
    </Fragment>
  );
};

export default CounterQuantity;
