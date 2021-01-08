import React, {Fragment} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import Box from '@material-ui/core/Box';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Link from '@material-ui/core/Typography';
import MuiChip from '../../../../components/mui-chip/mui-chip.component';
import useStyles from './directory.styles';

function Directory({contents}) {
  const classes = useStyles();
  const {name, link, images, tags} = contents;

  return (
    <Fragment>
      <GridList cellHeight={260} spacing={1}>
        {
          images.map((image, idx) => (
            <GridListTile key={idx} cols={idx === 0 ? 2 : 1}>
              <img src={image.imageUrl} alt='content-highlight'/>
            </GridListTile>
          ))
        }
      </GridList>
      <Box marginTop={2}>
        <Link
          className={classes.title}
          variant="h5"
          to={link}
          component={RouterLink}>{name}</Link>
      </Box>
      <Box marginTop={2}>
        {tags.map((tag, idx) => <MuiChip key={idx} label={tag.tagName} margin={5}/>)}
      </Box>
    </Fragment>
  );
}

export default Directory;
