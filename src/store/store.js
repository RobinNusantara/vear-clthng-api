import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {reduxFirestore, getFirestore} from 'redux-firestore';
import {getFirebase} from 'react-redux-firebase';
import rootReducer from '../reducers/root.reducer';
import firebase from '../config/firebase';

const middlewares = [
  thunk.withExtraArgument({getFirebase, getFirestore}),
];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
};

const store = createStore(rootReducer, compose(
    applyMiddleware(...middlewares),
    reduxFirestore(firebase),
));

export default store;
