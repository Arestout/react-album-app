import * as types from './users.types';

const initialState = {
  usersList: [],
};

export const usersReducers = (state = initialState, action) => {
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
