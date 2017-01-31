import { fromJS } from 'immutable';

import {
  CHANGETEXT,
} from './constants';

const initialState = fromJS({
  text: "",
});

const homePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGETEXT:
      return state
        .set('text', action.payload);
    default:
      return state;
  }
};

export default homePageReducer;
