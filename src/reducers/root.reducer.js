import {combineReducers} from 'redux';
import {firestoreReducer} from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase';
import directoriesReducer from './directories.reducer';
import collectionsReducer from './collections.reducer';

const rootReducer = combineReducers({
  directory: directoriesReducer,
  shop: collectionsReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
