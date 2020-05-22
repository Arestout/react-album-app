import * as actions from '../app.actions';
import { appReducers } from '../app.reducers';

const initialState = {
  isLoading: false,
  errorMessage: '',
};

const errorMessage = 'Error occurred';

describe('app reducers:', () => {
  test('should return initial state by default', () => {
    expect(appReducers(void 0, {})).toEqual(initialState);
  });

  test('should set isLoading to true', () => {
    expect(appReducers(void 0, actions.showLoader())).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  test('should set isLoading to false', () => {
    expect(appReducers(void 0, actions.hideLoader())).toEqual({
      ...initialState,
      isLoading: false,
    });
  });

  //   test('should update errorMessage', () => {
  //     expect(appReducers(void 0, actions.showError(errorMessage))).toEqual({
  //       ...initialState,
  //       errorMessage: errorMessage,
  //     });
  //   });
});
