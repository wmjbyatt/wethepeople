import { createSelector } from 'reselect';

const selectHome = () => state => state.get('home');

const selectText = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('text'),
);

export {
  selectText,
};
