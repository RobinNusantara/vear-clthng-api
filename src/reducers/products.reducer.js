import {ProductActionTypes} from '../helpers/helpers';

const initialState = {
  isLoading: false,
  products: [],
  error: '',
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ProductActionTypes.FETCH_PRODUCT_START:
      return {
        ...state,
        isLoading: true,
      };
    case ProductActionTypes.FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: action.payload,
      };
    case ProductActionTypes.FETCH_PRODUCT_FAILED:
      return {
        ...state,
        isLoading: false,
        products: action.error,
      };
    default:
      return state;
  }
};

export default productsReducer;
