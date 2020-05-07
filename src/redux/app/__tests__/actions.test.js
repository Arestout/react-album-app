import * as actions from '../app.actions';
import * as types from '../app.types';

const errorMessage = 'Error occurred';

describe('app actions:', () => {
  test('showLoader', () => {
    expect(actions.showLoader()).toEqual({
      type: types.SHOW_LOADER,
    });
  });

  test('hideLoader', () => {
    expect(actions.hideLoader()).toEqual({
      type: types.HIDE_LOADER,
    });
  });

  //   test('showError', () => {
  //     expect(actions.showError(errorMessage)).toEqual({
  //       type: types.SHOW_ERROR,
  //       payload: errorMessage,
  //     });
  //   });

  test('hideError', () => {
    expect(actions.hideError()).toEqual({
      type: types.HIDE_ERROR,
    });
  });
});
