import React, {useState} from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {Icon} from '@iconify/react';
import plusOutline from '@iconify/icons-eva/plus-outline';
import minusOutline from '@iconify/icons-eva/minus-outline';
import useStyles from './mui-counter.styles';

function MuiCounter({initialValue}) {
  const classes = useStyles();
  const [value, setValue] = useState(initialValue);

  const handleIncrement = () => setValue((currentValue) => currentValue + 1);

  const handleDecrement = () => setValue((currentValue) => currentValue - 1);

  return (
    <Box className={classes.root} marginTop={1} display="flex" justifyContent="space-between">
      <IconButton className={classes.quantityButton} onClick={handleDecrement} disabled={value <= 1}>
        <Icon className={classes.icon} icon={minusOutline} height={18} width={18}/>
      </IconButton>
      <Typography className={classes.value} variant="subtitle1">{value}</Typography>
      <IconButton className={classes.quantityButton} onClick={handleIncrement}>
        <Icon className={classes.icon} icon={plusOutline} height={18} width={18}/>
      </IconButton>
    </Box>
  );
}

MuiCounter.propTypes = {
  initialValue: PropTypes.number.isRequired,
};

export default MuiCounter;
