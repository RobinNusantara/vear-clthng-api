import React from 'react';
import Button from '@material-ui/core/Button';
import useStyles from './custom-button.styles';

function CustomButton({...props}) {
  const classes = useStyles(props);
  const {type, variant, color, children} = props;
  return (
    <Button
      type={type}
      className={classes.root}
      disableElevation
      variant={variant}
      color={color}>{children}</Button>
  );
};

export default CustomButton;
