import {CollectionTypes} from '../helpers/types';
import {firestore} from '../config/firebase';

const fetchCollectionStart = () => ({
  type: CollectionTypes.FETCH_COLLECTION_START,
});

const fetchCollectionSuccess = (collections) => ({
  type: CollectionTypes.FETCH_COLLECTION_SUCCESS,
  payload: collections,
});

const fetchCollectionFailed = (error) => ({
  type: CollectionTypes.FETCH_COLLECTION_FAILED,
  payload: error,
});

export function getCollections(id) {
  return (dispatch) => {
    const collectionRef = firestore.collection('directories')
        .doc(id)
        .collection('collections');
    dispatch(fetchCollectionStart());
    collectionRef.get().then((snapshot) => {
      const collections = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      dispatch(fetchCollectionSuccess(collections));
    }).catch((error) => dispatch(fetchCollectionFailed(error.message)));
  };
};
