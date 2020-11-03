import {CollectionTypes} from '../helpers/types';

const initialState = {
  collections: [],
  isloading: false,
  error: '',
};

function collectionsReducer(state = initialState, action) {
  switch (action.type) {
    case CollectionTypes.FETCH_COLLECTION_START:
      return {
        ...state,
        isLoading: true,
      };
    case CollectionTypes.FETCH_COLLECTION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        collections: action.payload,
      };
    case CollectionTypes.FETCH_COLLECTION_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default: return state;
  };
};

export default collectionsReducer;
