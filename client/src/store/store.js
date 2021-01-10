import {createStore, compose, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {routerMiddleware} from 'connected-react-router';
import {createBrowserHistory} from 'history';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../reducers/root.reducer';

export const history = createBrowserHistory();

const middlewares = [thunk, routerMiddleware(history)];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
};

export default function configureStore(preLoadedState) {
  const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth'],
  };
  const store = createStore(
      persistReducer(persistConfig, rootReducer(history)),
      preLoadedState,
      compose(applyMiddleware(...middlewares)));
  return store;
}
