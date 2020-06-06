import React, { FC } from 'react';
import styled from 'styled-components';

import { Loader } from '../../components/loader/Loader';
import { User } from '../../components/user/User';
import { User as UserType } from '../../redux/users/users.types';

import { useFetchUsers } from '../../hooks/useFetchUsers';
import { ErrorMessage } from '../../components/error-message/ErrorMessage';

const UsersOverviewContainer = styled.div`
  min-height: 300px;
  margin: 0 0 0 100px;
`;

const PageTitle = styled.h1`
  font-size: 1.9em;
  font-weight: 400;
  line-height: 1.3;
  margin: 0.25em 3em 0;
`;

const UsersList = styled.ul`
  margin: 0;
  padding: 2em;
  text-align: center;
`;

export const UsersPage: FC = () => {
  const { usersList, isLoading, errorMessage } = useFetchUsers();

  const users =
    isLoading ||
    errorMessage ||
    usersList.map((user: UserType) => <User key={user.id} user={user} />);

  if (errorMessage) {
    return <ErrorMessage errorMessage={errorMessage} />;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <UsersOverviewContainer>
      <PageTitle>Users Overview</PageTitle>
      <UsersList>{users}</UsersList>
    </UsersOverviewContainer>
  );
};
