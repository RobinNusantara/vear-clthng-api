import {ProductActionTypes} from '../helpers/helpers';

const initialState = {
  isLoading: false,
  products: [],
  error: '',
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ProductActionTypes.FETCH_PRODUCTS_START:
      return {
        ...state,
        isLoading: true,
      };
    case ProductActionTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: action.payload,
      };
    case ProductActionTypes.FETCH_PRODUCTS_FAILED:
      return {
        ...state,
        isLoading: false,
        products: action.error,
      };
    case ProductActionTypes.DESTOY_PRODUCTS_STATE:
      return initialState;
    default:
      return state;
  }
};

export default productsReducer;
