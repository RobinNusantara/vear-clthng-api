import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
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
      <TextField
        autoComplete="off"
        variant="outlined"
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleChange}
        inputProps={{className: `${classes.input}`}}/>
      <FormHelperText className={classes.error}>{error}</FormHelperText>
    </FormControl>
  );
};

export default MuiTextField;
