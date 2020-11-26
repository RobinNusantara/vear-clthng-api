import {createStore, compose, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {reduxFirestore} from 'redux-firestore';
import {getFirebase} from 'react-redux-firebase';
import {routerMiddleware} from 'connected-react-router';
import {createBrowserHistory} from 'history';
import rootReducer from '../reducers/root.reducer';
import firebase from '../config/firebase';

export const history = createBrowserHistory();

const middlewares = [
  thunk.withExtraArgument(getFirebase),
  routerMiddleware(history),
];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
};

export default function configureStore(preLoadedState) {
  const store = createStore(
      rootReducer(history),
      preLoadedState,
      compose(
          applyMiddleware(...middlewares),
          reduxFirestore(firebase),
      ));
  return store;
}
