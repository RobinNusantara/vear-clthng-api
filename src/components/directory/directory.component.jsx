import React, {Fragment} from 'react';
import {useHistory} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './directory.styles';

function Directory({...props}) {
  const classes = useStyles(props);
  const history = useHistory();
  const {name, xs, md} = props;

  const moveToCollections = () => history.push(`/collections/${name}`);

  return (
    <Fragment>
      <Grid item xs={xs} md={md}>
        <div className={classes.root} onClick={moveToCollections}>
          <div className={classes.image}/>
          <div className={classes.content}>
            <Typography className={classes.textHeader} variant="h6">
              {name.toUpperCase()}
            </Typography>
            <Typography variant="h6">SHOP NOW</Typography>
          </div>
        </div>
      </Grid>
    </Fragment>
  );
};

export default Directory;
