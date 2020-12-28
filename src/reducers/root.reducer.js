import {combineReducers} from 'redux';
import {firestoreReducer} from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase';
import {connectRouter} from 'connected-react-router';
import authReducer from './auth.reducer';
import productsReducer from './products.reducer';
import wishlistReducer from './wishlist.reducer';
import cartsReducer from './carts.reducer';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  auth: authReducer,
  shop: productsReducer,
  favorites: wishlistReducer,
  bags: cartsReducer,
});

export default rootReducer;
