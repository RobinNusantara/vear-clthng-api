import {CollectionTypes} from '../helpers/types';

export const fetchCollectionStart = () => ({
  type: CollectionTypes.FETCH_COLLECTION_START,
});

export const fetchCollectionSuccess = (collections) => ({
  type: CollectionTypes.FETCH_COLLECTION_SUCCESS,
  payload: collections,
});

export const fetchCollectionFailed = (error) => ({
  type: CollectionTypes.FETCH_COLLECTION_FAILED,
  payload: error,
});
