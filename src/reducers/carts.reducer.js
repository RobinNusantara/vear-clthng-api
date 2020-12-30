import {CartActionTypes} from '../helpers/helpers';

const initialState = {
  isLoading: false,
  carts: [],
  error: '',
};

const cartsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionTypes.FETCH_CART_ITEMS_START:
      return {
        ...state,
        isLoading: true,
      };
    case CartActionTypes.FETCH_CART_ITEMS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        carts: action.payload,
      };
    case CartActionTypes.FETCH_CART_ITEMS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case CartActionTypes.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        carts: state.carts.filter((cart) => cart.id !== action.payload),
      };
    case CartActionTypes.DESTROY_CART_STATE:
      return initialState;
    default:
      return state;
  }
};

export default cartsReducer;
