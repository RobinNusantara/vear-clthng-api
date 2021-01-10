import React from 'react';
import Proptypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import useStyles from './button.styles';

function Button({margin, handleClick, children}) {
  const classes = useStyles();

  return (
    <Box margin={margin} className={classes.root} onClick={handleClick}>
      <Link
        className={classes.text}
        variant="body1"
        component="button"
        underline="none">{children}</Link>
    </Box>
  );
};

Button.propTypes = {
  margin: Proptypes.number,
};

export default Button;
