import {
  CHANGETEXT,
} from './constants';

export const doChangeText = (input) => {
  return {
    type: CHANGETEXT,
    payload: input,
  };
};
