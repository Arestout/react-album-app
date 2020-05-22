import * as types from './users.types';

export type UsersState = {
  usersList: types.UsersList,
};

const initialState: UsersState = {
  usersList: [],
};

export const usersReducers = (
  state = initialState,
  action: types.UsersActionTypes
): UsersState => {
  switch (action.type) {
    case types.FETCH_USERS:
      return {
        ...state,
      };
    case types.UPDATE_USERS:
      return {
        ...state,
        usersList: action.payload,
      };
    default:
      return state;
  }
};
