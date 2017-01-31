import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import { createEpicMiddleware } from 'redux-observable';

import rootEpic from './epics';
import createReducer from './reducers'

const epicMiddleware = createEpicMiddleware(rootEpic);

export const configureStore = (initialState = {}) => {
  const middlewares = [
    epicMiddleware,
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
  ];

  const store = createStore(
    createReducer(),
    fromJS(initialState),
    compose(...enhancers)
  );


  return store;
}

export default configureStore;
