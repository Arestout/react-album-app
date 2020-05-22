import * as actions from '../app.actions';
import * as types from '../app.types';

const errorMessage = 'Error occurred';

describe('app actions:', () => {
  test('showLoader', () => {
    expect(actions.showLoader()).toEqual({
      type: types.SHOW_LOADER,
    });
  });
});
