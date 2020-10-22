import React from 'react';
import useStyles from './container.styles';

function PageWrapper({children}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>{children}</div>
  );
};

export default PageWrapper;
