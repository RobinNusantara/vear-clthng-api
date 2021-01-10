import {ProductActionTypes} from '../helpers/helpers';

const initialState = {
  isLoading: false,
  products: [],
  product: {},
  query: '',
  value: 0,
  results: [],
  error: '',
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ProductActionTypes.FETCH_PRODUCTS_START:
    case ProductActionTypes.FETCH_PRODUCT_START:
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
    case ProductActionTypes.FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        product: action.payload,
      };
    case ProductActionTypes.FETCH_PRODUCTS_FAILED:
    case ProductActionTypes.FETCH_PRODUCT_FAILED:
      return {
        ...state,
        isLoading: false,
        products: action.payload,
      };
    case ProductActionTypes.SEARCH_ANY_PRODUCT:
      return {
        ...state,
        query: action.payload,
      };
    case ProductActionTypes.DEFAULT_PRODUCTS:
      return {
        ...state,
        value: 0,
      };
    case ProductActionTypes.FILTER_MEN_PRODUCTS:
      return {
        ...state,
        value: 1,
        results: action.payload,
      };
    case ProductActionTypes.FILTER_WOMEN_PRODUCTS:
      return {
        ...state,
        value: 2,
        results: action.payload,
      };
    case ProductActionTypes.DESTROY_PRODUCTS_STATE:
      return initialState;
    default:
      return state;
  }
};

export default productsReducer;
