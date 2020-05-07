import * as types from './users.types';

export function fetchUsers() {
  return {
    type: types.FETCH_USERS,
  };
}

export function updateUsers(users) {
  return {
    type: types.UPDATE_USERS,
    payload: users,
  };
}
