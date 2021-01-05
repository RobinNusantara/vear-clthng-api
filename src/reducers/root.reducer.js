import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import authReducer from './auth.reducer';
import productsReducer from './products.reducer';
import favoritesReducer from './favorites.reducer';
import cartsReducer from './carts.reducer';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  auth: authReducer,
  shop: productsReducer,
  favorites: favoritesReducer,
  bags: cartsReducer,
});

export default rootReducer;
