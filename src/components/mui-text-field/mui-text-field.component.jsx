import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormHelperText from '@material-ui/core/FormHelperText';
import useStyles from './mui-text-field.styles';

function MuiTextField({...props}) {
  const classes = useStyles();
  const {
    label,
    type,
    placeholder,
    name,
    value,
    handleChange,
    error,
  } = props;
  return (
    <FormControl className={classes.root}>
      <label className={classes.label}>{label}</label>
      <OutlinedInput
        className={classes.input}
        autoComplete="off"
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleChange}/>
      <FormHelperText className={classes.error}>{error}</FormHelperText>
    </FormControl>
  );
};

export default MuiTextField;
