import React from 'react';
import Proptypes from 'prop-types';
import Chip from '@material-ui/core/Chip';
import useStyles from './mui-chip.styles';

function MuiChip({...props}) {
  const classes = useStyles(props);
  const {label} = props;

  return <Chip className={classes.root} label={label}/>;
}

MuiChip.propTypes = {
  label: Proptypes.string.isRequired,
  margin: Proptypes.number,
};

export default MuiChip;
