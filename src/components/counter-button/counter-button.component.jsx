import React, {Fragment, useState} from 'react';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import {Icon} from '@iconify/react';
import plusOutline from '@iconify/icons-eva/plus-outline';
import minusOutline from '@iconify/icons-eva/minus-outline';
import useStyles from './counter-button.styles';

function CounterButton() {
  const [count, setCount] = useState(0);
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.root}>
        <IconButton
          className={classes.button}
          size="small"
          onClick={() => setCount(count -1)}>
          <Icon className={classes.icon} icon={minusOutline}/>
        </IconButton>
        <Typography className={classes.counter} variant="subtitle1">
          {count}
        </Typography>
        <IconButton
          className={classes.button}
          size="small"
          onClick={() => setCount(count +1)}>
          <Icon className={classes.icon} icon={plusOutline}/>
        </IconButton>
      </div>
    </Fragment>
  );
};

export default CounterButton;
