import React from 'react';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormHelperText from '@material-ui/core/FormHelperText';
import useStyles from './text-field.styles';

function TextField({...props}) {
  const classes = useStyles();
  const {label, type, name, value, handleChange, error} = props;
  return (
    <FormControl className={classes.root}>
      <label className={classes.label}>
        <Typography variant="subtitle1">{label}</Typography>
      </label>
      <OutlinedInput
        className={classes.input}
        autoComplete="off"
        type={type}
        name={name}
        value={value}
        onChange={handleChange}/>
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  );
};

export default TextField;
