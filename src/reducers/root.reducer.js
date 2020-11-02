import {combineReducers} from 'redux';
import directoriesReducer from './directories.reducer';
import collectionsReducer from './collections.reducer';

const rootReducer = combineReducers({
  directory: directoriesReducer,
  shop: collectionsReducer,
});

export default rootReducer;
