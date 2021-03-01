import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
import NumberFormat from 'react-number-format';
import useStyles from './mui-field-format.styles';

function MuiFieldFormat({...props}) {
  const classes = useStyles();
  const {label, name, value, icon, handleChange} = props;

  return (
    <FormControl className={classes.root}>
      <label className={classes.label}>{label}</label>
      <TextField
        autoComplete="off"
        value={value}
        variant="outlined"
        onChange={handleChange}
        name={name}
        fullWidth={true}
        inputProps={{className: `${classes.input}`}}
        InputProps={{
          inputComponent: NumberFormatCustom,
          startAdornment: (
            <InputAdornment position="start">
              <Typography variant="body2">{icon}</Typography>
            </InputAdornment>
        )}}/>
    </FormControl>
  );
}

function NumberFormatCustom(props) {
  const {inputRef, onChange, ...other} = props;
  
  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString/>
    );
}
  
NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};  

export default MuiFieldFormat;
