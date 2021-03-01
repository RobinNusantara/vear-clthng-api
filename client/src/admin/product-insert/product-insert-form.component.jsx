import React, {Fragment} from 'react';
import {useDispatch} from 'react-redux';
import {insertProduct} from '../../actions/products.action';
import {Formik, Form, Field} from 'formik';
import useChips from '../../hooks/use-chips';
import useImages from '../../hooks/use-images';
import {useTheme} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import MenuItem from '@material-ui/core/MenuItem';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';
import MuiTextField from '../../components/mui-text-field/mui-text-field.component';
import MuiSelectField from '../../components/mui-select-field/mui-select-field.component';
import MuiChipInput from '../../components/mui-chip-input/mui-chip-input.component';
import MuiFieldFormat from '../../components/mui-field-format/mui-field-format.component'
import MuiButton from '../../components/mui-button/mui-button.component';
import ImageField from '../../components/image-field/image-field.component';
import categories from '../../data/categories';
import useStyles from './product-styles';

const types = [
  {'value': 'Men'},
  {'value': 'Women'},
]

function ProductForm() {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const [sizes, inputSize, removeSize] = useChips([]);
  const [colors, inputColor, removeColor] = useChips([]);
  const [images, getRootProps, getInputProps] = useImages([]);

  const ImagePreview = images.map((image) => (
    <GridListTile key={image.path}>
      <img src={image.preview} alt={image.name} />
    </GridListTile>
  ));

  return (
    <Fragment>
      <Formik
        initialValues={{
          productName: '',
          productBrand: '',
          productCategory: '',
          productType: '',
          productWeight: '',
          productPrice: '',
        }}
        onSubmit={(values) => {
          const data = {sizes, colors, images, ...values};
          console.log(typeof sizes);
          dispatch(insertProduct(data));
        }}>{({values, handleChange, errors}) => (
          <Form>
            <Box padding={matches ? 2 : 4}>
              <Grid container spacing={matches ? 0 : 2}>
                <Grid item xs={12} md={6}>
                  <MuiTextField
                    label="Product Name"
                    type="text"
                    name="productName"
                    values={values.productName}
                    handleChange={handleChange}/>
                  <Field
                    as={MuiSelectField}
                    label="Select Category"
                    name="productCategory"
                    handleChange={handleChange}>
                    {
                      categories.map((category, idx) => (
                        <MenuItem key={idx} value={category.name}>
                          <Typography className={classes.menuItem} variant="body2">
                            {category.name}
                          </Typography>
                        </MenuItem>
                      ))
                    }
                  </Field>
                </Grid>
                <Grid item xs={12} md={6}>
                  <MuiTextField
                    label="Product Brand"
                    type="text"
                    name="productBrand"
                    values={values.productBrand}
                    handleChange={handleChange}/>
                  <Field
                    as={MuiSelectField}
                    label="Select Type"
                    name="productType"
                    handleChange={handleChange}>
                    {
                      types.map((type, idx) => (
                        <MenuItem key={idx} value={type.value}>
                          <Typography className={classes.menuItem} variant="body2">
                            {type.value}
                          </Typography>
                        </MenuItem>
                      ))
                    }
                  </Field>
                </Grid>
                <Grid item xs={12} md={6}>
                  <MuiChipInput
                    label="Product Sizes"
                    onKeyDown={inputSize}
                    chips={sizes}
                    onDelete={removeSize}/>
                  <MuiFieldFormat
                    label="Product Weight"
                    name="productWeight"
                    values={values.productWeight}
                    handleChange={handleChange}
                    icon="Kg"/>
                </Grid>
                <Grid item xs={12} md={6}>
                  <MuiChipInput
                    label="Product Colors"
                    onKeyDown={inputColor}
                    chips={colors}
                    isCapitalize={true}
                    onDelete={removeColor}/>
                  <MuiFieldFormat
                    label="Product Price"
                    name="productPrice"
                    value={values.productPrice}
                    handleChange={handleChange}
                    icon="Rp"/>
                </Grid>
                <Grid item xs={12} md={6}>
                  <ImageField getRootProps={getRootProps} getInputProps={getInputProps}/>
                  <div className={classes.previewContainer}>
                    <GridList cellHeight={140} spacing={6} cols={3}>
                      {ImagePreview}
                    </GridList>
                  </div>
                </Grid>
              </Grid>
            </Box>
            <Box className={classes.buttonContainer}>
              <Box className={classes.buttons} padding={matches ? 2 : 4}>
                <Box marginRight={1}>
                  <MuiButton
                    variant="outlined"
                    color="primary"
                    height={46}
                    width={160}>Cancel</MuiButton>
                </Box>
                <Box marginLeft={1}>
                  <MuiButton
                    type="submit"
                    variant="contained"
                    color="primary"
                    height={46}
                    width={160}>Submit</MuiButton>
                </Box>
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
    </Fragment>
  );
}

export default ProductForm
