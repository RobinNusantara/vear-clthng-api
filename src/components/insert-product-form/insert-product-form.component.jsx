import React, {Fragment, useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Formik, Form} from 'formik';
import {useDropzone} from 'react-dropzone';
import {insertProduct} from '../../actions/products.action';
import InputField from '../text-field/text-field.component';
import CustomButton from '../custom-button/custom-button.component';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import ImageIcon from '@material-ui/icons/Image';
import useStyles from './insert-product-form.styles';
import categories from '../../data/categories';

const types = [
  {
    'name': 'Men',
  },
  {
    'name': 'Women',
  },
];

function InsertProductForm() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [files, setFiles] = useState([]);

  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/jpeg, image/png',
    maxFiles: 6,
    onDrop: (acceptedFiles) => {
      setFiles([...files, ...acceptedFiles.map((file) => Object.assign(file, {
        preview: URL.createObjectURL(file),
      }))]);
    },
  });

  const ImagePreview = files.map((file) => (
    <GridListTile key={file.path}>
      <img src={file.preview} alt={file.name} />
    </GridListTile>
  ));

  useEffect(() => () => {
    files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <Fragment>
      <Formik
        initialValues={{
          productName: '',
          productBrand: '',
          productCategory: '',
          productType: '',
          productColor: '',
          productSize: '',
          productPrice: '',
        }}
        onSubmit={(values) => {
          dispatch(insertProduct({...values, files}));
        }}>{({values, handleChange, errors}) => (
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <InputField
                  label="Product Name"
                  type="text"
                  name="productName"
                  value={values.productName}
                  handleChange={handleChange}/>
                <InputField
                  label="Product Brand"
                  type="text"
                  name="productBrand"
                  value={values.productBrand}
                  handleChange={handleChange}/>
                <FormControl className={classes.inputSelectContainer}>
                  <label className={classes.inputSelectLabel}>
                    Product Category
                  </label>
                  <TextField
                    className={classes.inputSelectMenu}
                    select
                    name="productCategory"
                    value={values.productCategory}
                    variant="outlined"
                    onChange={handleChange}
                    inputProps={{className: classes.inputSelectField}}>
                    {
                      categories.map((category, idx) => (
                        <MenuItem
                          className={classes.inputSelectMenu}
                          key={idx}
                          value={category.name}>
                          {category.name}
                        </MenuItem>
                      ))
                    }
                  </TextField>
                </FormControl>
                <FormControl className={classes.inputSelectContainer}>
                  <label className={classes.inputSelectLabel}>
                    Product Type
                  </label>
                  <TextField
                    className={classes.inputSelectMenu}
                    select
                    name="productType"
                    value={values.productType}
                    variant="outlined"
                    onChange={handleChange}
                    inputProps={{className: classes.inputSelectField}}>
                    {
                      types.map((type, idx) => (
                        <MenuItem
                          className={classes.inputSelectMenu}
                          key={idx}
                          value={type.name}>
                          {type.name}
                        </MenuItem>
                      ))
                    }
                  </TextField>
                </FormControl>
                <InputField
                  label="Product Color"
                  type="text"
                  name="productColor"
                  value={values.productColor}
                  handleChange={handleChange}/>
                <InputField
                  label="Product Size"
                  type="text"
                  name="productSize"
                  value={values.productSize}
                  handleChange={handleChange}/>
                <InputField
                  label="Product Price"
                  type="number"
                  name="productPrice"
                  value={values.productPrice}
                  handleChange={handleChange}/>
              </Grid>
              <Grid item xs={12} sm={6}>
                <div className={classes.inputContainer}>
                  <div {...getRootProps({className: 'dropzone'})}>
                    <div className={classes.inputAction}>
                      <input {...getInputProps()}/>
                      <ImageIcon className={classes.inputIcon}/>
                      <Typography
                        className={classes.inputTextTitle}
                        variant="subtitle1">
                        Insert Product Images
                      </Typography>
                      <Typography
                        className={classes.inputTextSubtitle}
                        variant="subtitle2">
                        Drag and drop some images here, or click to select images
                      </Typography>
                    </div>
                  </div>
                </div>
                <div className={classes.previewContainer}>
                  <GridList cellHeight={140} spacing={6} cols={3}>
                    {ImagePreview}
                  </GridList>
                </div>
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomButton
                  type="submit"
                  variant="contained"
                  color="primary"
                  width="100%">Insert</CustomButton>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Fragment>
  );
}

export default InsertProductForm;
