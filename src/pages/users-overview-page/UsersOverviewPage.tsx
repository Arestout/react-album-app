import React, { FC } from 'react';
import styled from 'styled-components';

import { Loader } from '../../components/loader/Loader';
import { User } from '../../components/user/User';
import { User as UserType } from '../../redux/users/users.types';

import { useFetchUsers } from '../../hooks/useFetchUsers';

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

export const UsersOverviewPage: FC = () => {
  const { usersList, isLoading } = useFetchUsers();

  const users =
    isLoading ||
    usersList.map((user: UserType) => <User key={user.id} user={user} />);

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
