import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchUsers } from '../redux/users/users.actions';
import * as types from '../redux/users/users.types';
import { RootState } from '../redux/rootReducer';
import { UsersState } from '../redux/users/users.reducers';
import { showError } from '../redux/app/app.actions';

type FetchUsersState = {
  isLoading: boolean,
  errorMessage: string,
  usersList: types.UsersList,
};

export const useFetchUsers = (): FetchUsersState => {
  const dispatch = useDispatch();
  const { isLoading, errorMessage } = useSelector(
    (state: RootState) => state.app
  );
  const { usersList } = useSelector<RootState, UsersState>(
    (state: RootState) => state.users
  );

  if (errorMessage) {
    showError('');
  }

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return {
    isLoading,
    errorMessage,
    usersList,
  };
};
