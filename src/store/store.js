import {createStore, compose, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {reduxFirestore} from 'redux-firestore';
import rootReducer from '../reducers/root.reducer';
import firebase from '../config/firebase';

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
};

const store = createStore(rootReducer, compose(
    applyMiddleware(...middlewares),
    reduxFirestore(firebase),
));

export default store;
