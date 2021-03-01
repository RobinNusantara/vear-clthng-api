import React, {Fragment} from 'react';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import useStyles from './image-field.styles';

function ImageField({getRootProps, getInputProps}) {
  const classes = useStyles();
  return (
    <Fragment>
      <Box {...getRootProps({className: 'dropzone'})} className={classes.root}>
        <input {...getInputProps()} />
        <Box className={classes.imageContent}>
          <IconButton className={classes.imageButton}>
            <AddPhotoAlternateIcon className={classes.imageIcon}/>
          </IconButton>
          <Typography className={classes.imageText} variant="subtitle1">
            Click to select images
          </Typography>
        </Box>
      </Box>
    </Fragment>
  )
}

export default ImageField;
