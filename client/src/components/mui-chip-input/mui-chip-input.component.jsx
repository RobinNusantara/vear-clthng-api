import React from 'react';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Chip from '@material-ui/core/Chip';
import useStyles from './mui-chip-input.styles';

function MuiChipInput({...props}) {
  const classes = useStyles(props);
  const {label, onKeyDown, chips, onDelete} = props;

  return (
    <FormControl className={classes.root}>
      <label className={classes.label}>{label}</label>
      <div className={classes.chips}>
        <OutlinedInput
          className={classes.input}
          type="text"
          fullWidth={true}
          onKeyDown={onKeyDown}/>
        {
          chips.map((chip, idx) => (
            <Box key={idx} marginTop={1} marginRight={1}>
              <Chip
                className={classes.chip}
                label={chip}
                color="secondary"
                onDelete={() => onDelete(idx)}/>
            </Box>
          ))
        }
      </div>
    </FormControl>
  );
}

export default MuiChipInput;
