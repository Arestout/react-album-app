import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import * as types from '../../redux/users/users.types';

// Styles
const UserContainer = styled.li`
  display: inline-block;
  width: 200px;
  height: 200px;
  margin: 10px;
  border-radius: 5px;
  background: #1c1d22;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 15px rgba(97, 219, 251);
  }
`;

const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;

const UserName = styled.p`
  text-transform: capitalize;
`;

const UserAvatar = styled.img`
  border-radius: 50%;
`;

// Types
type UserTypes = {
  user: types.User,
};

// Component
export const User: FC<UserTypes> = ({ user }: UserTypes) => (
  <Link to={`/users/${user.id}/albums`}>
    <UserContainer>
      <ContentBlock>
        <UserAvatar src="https://picsum.photos/150" />
        <UserName>{user.name}</UserName>
      </ContentBlock>
    </UserContainer>
  </Link>
);
