import React, {Fragment} from 'react';
import {useSelector, connect} from 'react-redux';
import {useFirestoreConnect} from 'react-redux-firebase';
import {removeProductFromWishlist} from '../../actions/wishlist.action';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import {Icon} from '@iconify/react';
import trashOutline from '@iconify/icons-eva/trash-outline';
import PageWrapper from '../../components/container/container.component';
import Header from '../../components/header/header.component';
import CustomTable from '../../components/custom-table/custom-table.component';
import Spinner from '../../components/spinner/spinner.component';
import EmptyFavoriteIllustration from '../../assets/images/empty-wishlist.svg';
import useStyles from './favorites-page.styles';

function FavoritesPage({removeProduct}) {
  const classes = useStyles();
  const uid = useSelector((state) => state.firebase.auth.uid);

  const wishlistPath = `users/${uid}/wishlist`;
  useFirestoreConnect(() => [{collection: wishlistPath}]);
  const wishlist = useSelector((state) => state.firestore.ordered[wishlistPath]);

  return (
    <Fragment>
      <Container>
        <PageWrapper>
          {
            !wishlist ? <Spinner/> :
            wishlist.length === 0 ?
            <div className={classes.message}>
              <figure className={classes.figure}>
                <img src={EmptyFavoriteIllustration} alt="empty-favorite"/>
                <figcaption>
                  <Typography className={classes.textHeader} variant="h6">
                    YOUR WISHLIST IS EMPTY
                  </Typography>
                  <Typography className={classes.textSubtitle} variant="subtitle1">
                    LOOKS LIKE YOU HAVEN&apos;T MADE YOUR CHOICES YET
                  </Typography>
                </figcaption>
              </figure>
            </div> :
            <Fragment>
              <Header
                collection={wishlist}
                uid={uid}
                textHeader="FAVORITE"
                iconButton={
                  <Icon
                    height={24}
                    width={24}
                    icon={trashOutline}/>
                }/>
              <CustomTable
                collection={wishlist}
                removeDocument={removeProduct}/>
            </Fragment>
          }
        </PageWrapper>
      </Container>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeProduct: (uid, id) => dispatch(removeProductFromWishlist(uid, id)),
  };
};

export default connect(null, mapDispatchToProps)(FavoritesPage);
