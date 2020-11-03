import {combineReducers} from 'redux';
import authReducer from './auth.reducer';
import directoriesReducer from './directories.reducer';
import collectionsReducer from './collections.reducer';

const rootReducer = combineReducers({
  user: authReducer,
  directory: directoriesReducer,
  shop: collectionsReducer,
});

export default rootReducer;
