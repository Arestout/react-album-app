import { createSelector } from 'reselect';

const selectApp = (state) => state.app;

export const selectIsLoading = createSelector(
  [selectApp],
  (state) => state.isLoading
);
