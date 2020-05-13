import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchUsers } from '../redux/users/users.actions';

export const useFetchUsers = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.app);
  const { usersList } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return {
    isLoading,
    usersList,
  };
};
