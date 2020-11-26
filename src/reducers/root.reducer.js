import {combineReducers} from 'redux';
import {firestoreReducer} from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase';
import {connectRouter} from 'connected-react-router';
import authReducer from './auth.reducer';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  auth: authReducer,
});

export default rootReducer;
