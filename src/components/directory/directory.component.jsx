import React, {Fragment} from 'react';
import {useHistory, useRouteMatch} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './directory.styles';

function Directory({...props}) {
  const classes = useStyles(props);
  const {title, linkUrl, xs, md} = props;
  const history = useHistory();
  const match = useRouteMatch();

  return (
    <Fragment>
      <Grid item xs={xs} md={md}>
        <div
          className={classes.root}
          onClick={() => `${match.url}${history.push(linkUrl)}`}>
          <div className={classes.image}/>
          <div className={classes.content}>
            <Typography className={classes.textHeader} variant="h6">
              {title.toUpperCase()}
            </Typography>
            <Typography variant="h6">SHOP NOW</Typography>
          </div>
        </div>
      </Grid>
    </Fragment>
  );
};

export default Directory;
