import * as actions from '../users.actions';
import { usersReducers } from '../users.reducers';

const initialState = {
  usersList: [],
};

const users = [
  { id: 1, name: 'name1' },
  { id: 2, name: 'name2' },
];

describe('users reducers:', () => {
  test('should return initial state by default', () => {
    expect(usersReducers(void 0, {})).toEqual(initialState);
  });

  test('should return initial state after fetch request', () => {
    expect(usersReducers(void 0, actions.fetchUsers())).toEqual(initialState);
  });

  test('should update the usersList', () => {
    expect(usersReducers(void 0, actions.updateUsers(users))).toEqual({
      ...initialState,
      usersList: users,
    });
  });
});
