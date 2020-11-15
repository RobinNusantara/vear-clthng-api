import React, {Fragment} from 'react';
import {useSelector} from 'react-redux';
import {useRemoveData} from '../../hooks/user.hook';
import {useFirestoreConnect} from 'react-redux-firebase';
import Container from '@material-ui/core/Container';
import {Icon} from '@iconify/react';
import trashOutline from '@iconify/icons-eva/trash-outline';
import PageWrapper from '../../components/container/container.component';
import Header from '../../components/header/header.component';
import CustomTable from '../../components/custom-table/custom-table.component';
import Spinner from '../../components/spinner/spinner.component';

function FavoritesPage() {
  const uid = useSelector((state) => state.firebase.auth.uid);

  const wishlistPath = `users/${uid}/wishlist`;
  useFirestoreConnect(() => [{collection: wishlistPath}]);
  const wishlist = useSelector((state) => state.firestore.ordered[wishlistPath]);

  const [remove, setRemove] = useRemoveData({uid, collection: 'wishlist'});

  return (
    <Fragment>
      <Container>
        <PageWrapper>
          {
            !wishlist ? <Spinner/> :
            <Fragment>
              <Header
                textHeader="FAVORITE"
                textSubtitle={wishlist.length}
                iconButton={
                  <Icon
                    height={24}
                    width={24}
                    icon={trashOutline}/>
                }/>
              <CustomTable
                collection={wishlist}
                remove={remove}
                setRemove={setRemove}/>
            </Fragment>
          }
        </PageWrapper>
      </Container>
    </Fragment>
  );
};

export default FavoritesPage;
