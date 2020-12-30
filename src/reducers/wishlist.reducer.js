import {FavoriteActionTypes} from '../helpers/helpers';

const initialState = {
  isLoading: false,
  wishlist: [],
  error: '',
};

const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case FavoriteActionTypes.FETCH_FAVORITE_ITEMS_START:
      return {
        ...state,
        isLoading: true,
      };
    case FavoriteActionTypes.FETCH_FAVORITE_ITEMS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        wishlist: action.payload,
      };
    case FavoriteActionTypes.FETCH_FAVORITE_ITEMS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case FavoriteActionTypes.REMOVE_ITEM_FROM_FAVORITE:
      return {
        ...state,
        wishlist: state.wishlist.filter((item) => item.id !== action.payload),
      };
    case FavoriteActionTypes.DESTROY_FAVORITES_STATE:
      return initialState;
    default:
      return state;
  }
};

export default wishlistReducer;
