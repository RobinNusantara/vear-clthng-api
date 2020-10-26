import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormHelperText from '@material-ui/core/FormHelperText';
import useStyles from './text-field.styles';

function TextField({...props}) {
  const classes = useStyles();
  const {label, type, name, value, handleChange, error, endAdornment} = props;
  return (
    <FormControl className={classes.root}>
      <label className={classes.label}>{label}</label>
      <OutlinedInput
        className={classes.input}
        autoComplete="off"
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        endAdornment={endAdornment}/>
      <FormHelperText className={classes.error}>{error}</FormHelperText>
    </FormControl>
  );
};

export default TextField;
