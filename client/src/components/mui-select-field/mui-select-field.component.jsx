import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import useStyles from './mui-select-field.styles';

function MuiSelectField({...props}) {
  const classes = useStyles();
  const {
    label,
    name,
    value,
    handleChange,
    disabled,
    error,
    children,
  } = props;

  return (
    <FormControl className={classes.root}>
      <label className={classes.label}>{label}</label>
      <TextField
        className={classes.input}
        select
        variant="outlined"
        name={name}
        value={value}
        onChange={handleChange}
        disabled={disabled}>
          {children}
        </TextField>
      <FormHelperText className={classes.error}>{error}</FormHelperText>
    </FormControl>
  );
};

export default MuiSelectField;
