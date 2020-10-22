import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import useStyles from './text-field.styles';

function TextField({...props}) {
  const classes = useStyles();
  const {label, type, name, value, handleChange, error} = props;
  return (
    <FormControl className={classes.root}>
      <InputLabel>{label}</InputLabel>
      <Input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}/>
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  );
};

export default TextField;
