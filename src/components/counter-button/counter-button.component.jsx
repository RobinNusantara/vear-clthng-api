import React, {Fragment} from 'react';
import {useSelector} from 'react-redux';
import {useUpdateData} from '../../hooks/user.hook';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import {Icon} from '@iconify/react';
import plusOutline from '@iconify/icons-eva/plus-outline';
import minusOutline from '@iconify/icons-eva/minus-outline';
import useStyles from './counter-button.styles';

function CounterButton({document}) {
  const {id, productAmount} = document;
  const classes = useStyles();
  const uid = useSelector((state) => state.firebase.auth.uid);

  const [, setIncrement] = useUpdateData({
    uid,
    collection: 'cart',
    payload: {productAmount: productAmount + 1},
  });

  const [, setDecrement] = useUpdateData({
    uid,
    collection: 'cart',
    payload: {productAmount: productAmount - 1},
  });

  return (
    <Fragment>
      <div className={classes.root}>
        <Paper elevation={0} className={classes.paper}>
          <IconButton
            size="small"
            disabled={productAmount <= 1 ? true : false}
            onClick={(event) => {
              event.preventDefault();
              setDecrement(id);
            }}>
            <Icon className={classes.icon} icon={minusOutline}/>
          </IconButton>
        </Paper>
        <Typography className={classes.counter} variant="subtitle1">
          {productAmount}
        </Typography>
        <Paper elevation={0} className={classes.paper}>
          <IconButton
            size="small"
            onClick={(event) => {
              event.preventDefault();
              setIncrement(id);
            }}>
            <Icon className={classes.icon} icon={plusOutline}/>
          </IconButton>
        </Paper>
      </div>
    </Fragment>
  );
};

export default CounterButton;
