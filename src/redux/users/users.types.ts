export type User = {
  id: number,
  name: string,
};

export type UsersList = User[];

export const FETCH_USERS = 'FETCH_USERS';
export type FetchUsersAction = {
  type: typeof FETCH_USERS,
};

export const UPDATE_USERS = 'UPDATE_USERS';
export type UpdateUsersAction = {
  type: typeof UPDATE_USERS,
  payload: UsersList,
};

export type UsersActionTypes = FetchUsersAction | UpdateUsersAction;
