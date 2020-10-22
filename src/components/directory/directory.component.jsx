import React, {Fragment} from 'react';
import Typography from '@material-ui/core/Typography';
import useStyles from './directory.styles';

function Directory({...props}) {
  const {title} = props;
  const classes = useStyles(props);
  return (
    <Fragment>
      <div className={classes.root}>
        <div className={classes.image}/>
        <div className={classes.content}>
          <Typography className={classes.textHeader} variant="h6">
            {title}
          </Typography>
          <Typography variant="h6">SHOP NOW</Typography>
        </div>
      </div>
    </Fragment>
  );
};

export default Directory;
