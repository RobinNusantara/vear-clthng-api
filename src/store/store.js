import {createStore, compose, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {routerMiddleware} from 'connected-react-router';
import {createBrowserHistory} from 'history';
import rootReducer from '../reducers/root.reducer';

export const history = createBrowserHistory();

const middlewares = [thunk, routerMiddleware(history)];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
};

export default function configureStore(preLoadedState) {
  const store = createStore(
      rootReducer(history),
      preLoadedState,
      compose(applyMiddleware(...middlewares)));
  return store;
}
