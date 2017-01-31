import { combineReducers } from 'redux-immutable';
import { fromJS } from 'immutable';

import homePageReducer from './containers/HomePage/reducer';

const createReducer = () =>
  combineReducers({
    home: homePageReducer,
  });

export default createReducer;

