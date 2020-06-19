import * as types from './users.types';

export function fetchUsers(): types.UsersActionTypes {
  return {
    type: types.FETCH_USERS,
  };
}

export function updateUsers(users: types.UsersList): types.UpdateUsersAction {
  return ({
    type: types.UPDATE_USERS,
    payload: users,
  } as const);
}
