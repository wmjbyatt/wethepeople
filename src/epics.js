import { combineEpics } from 'redux-observable';

const pingEpic = action$ =>
  action$.ofType('ANYTHING')
         .delay(1000)

export default combineEpics(
  pingEpic,
);
