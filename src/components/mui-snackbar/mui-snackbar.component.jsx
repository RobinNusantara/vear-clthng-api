import React, {forwardRef} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import useStyles from './mui-snackbar.styles';

const Alert = forwardRef((props, ref) => <MuiAlert elevation={1} variant="filled" {...props} ref={ref} />);

function MuiSnackbar({...props}) {
  const classes = useStyles();
  const {
    open,
    handleClose,
    severity,
    children,
  } = props;

  return (
    <Snackbar className={classes.root} open={open} autoHideDuration={2000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity}>
        {children}
      </Alert>
    </Snackbar>
  );
}

export default MuiSnackbar;
