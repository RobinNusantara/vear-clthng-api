import React from 'react';
import Button from '@material-ui/core/Button';
import useStyles from './mui-button.styles';

function MuiButton({...props}) {
  const classes = useStyles(props);
  const {type, variant, color, disabled, onClick, children, icon} = props;

  return (
    <Button
      type={type}
      className={classes.root}
      disableElevation
      variant={variant}
      color={color}
      disabled={disabled}
      onClick={onClick}
      startIcon={icon}>{children}</Button>
  );
};

export default MuiButton;
