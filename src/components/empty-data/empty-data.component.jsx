import React from 'react';
import Typography from '@material-ui/core/Typography';
import useStyles from './empty-data.styles';

function EmptyData({...messages}) {
  const classes = useStyles();
  const {title, description, icon} = messages;
  const url = process.env.REACT_APP_VEAR_CLOTHING_URL;

  return (
    <div className={classes.root}>
      <figure className={classes.figure}>
        <img src={`${url}/${icon}`} alt="empty-data"/>
        <figcaption>
          <Typography className={classes.title} variant="h6">
            {title}
          </Typography>
          <Typography className={classes.description} variant="subtitle1">
            {description}
          </Typography>
        </figcaption>
      </figure>
    </div>
  );
}

export default EmptyData;
