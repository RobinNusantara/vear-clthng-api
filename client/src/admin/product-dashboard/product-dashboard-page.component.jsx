import React, {Fragment} from 'react';
import {useHistory} from 'react-router-dom';
import {useTheme} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Divier from '@material-ui/core/Divider';
import ProductInformationBox from '../../components/product-information-box/product-information-box.component';
import MuiSearchBar from '../../components/mui-search-bar/mui-search-bar.component';
import MuiButton from '../../components/mui-button/mui-button.component';
import ProductTable from './product-table.component';
import AddIcon from '@material-ui/icons/Add';
import Tshirt from '../../assets/icons/tshirt-icon.svg';
import Pants from '../../assets/icons/pants-icon.svg';
import Jackets from '../../assets/icons/jackets-icon.svg';
import Sneakers from '../../assets/icons/shoes-icon.svg';
import useStyles from './product-dashboard-page.styles';

const icons = [
  {'iconName': Tshirt},
  {'iconName': Pants},
  {'iconName': Jackets},
  {'iconName': Sneakers},
];

function ProductDashboard() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));
  const history = useHistory();

  const moveToInsertProductPage = () => history.push('/admin/product/insert');

  return (
    <Fragment>
      <Container>
        <div className={classes.root}>
          <Grid container spacing={2}>
            {icons.map((icon, idx) => <ProductInformationBox key={idx} icon={icon.iconName}/>)}
          </Grid>
          <Box marginTop={4}>
            <Paper>
              <Box padding={4}>
                <Typography variant="h6">Products</Typography>
                <Divier className={classes.divider}/>
                <Box display="flex" justifyContent="space-between">
                  <Box width={matches ? '100%' : 280}>
                    <MuiSearchBar/>
                  </Box>
                  <IconButton className={classes.insertIconButton} onClick={moveToInsertProductPage}>
                    <AddIcon className={classes.addIcon}/>
                  </IconButton>
                  <Box display={{xs: 'none', sm: 'block'}}>
                    <MuiButton
                      color="primary"
                      variant="contained"
                      elevation={true}
                      height={50}
                      width={160}
                      icon={<AddIcon/>}
                      onClick={moveToInsertProductPage}>Insert</MuiButton>
                  </Box>
                </Box>
                <Box marginTop={4}>
                  <ProductTable/>
                </Box>
              </Box>
            </Paper>
          </Box>
        </div>
      </Container>
    </Fragment>
  )
}

export default ProductDashboard;
