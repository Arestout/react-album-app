import * as actions from '../users.actions';
import * as types from '../users.types';

const users = [
  { id: 1, name: 'name1' },
  { id: 2, name: 'name2' },
];

describe('users actions:', () => {
  test('fetch users', () => {
    expect(actions.fetchUsers()).toEqual({
      type: types.FETCH_USERS,
    });
  });

  test('update users', () => {
    expect(actions.updateUsers(users)).toEqual({
      type: types.UPDATE_USERS,
      payload: users,
    });
  });
});
