import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

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

const User = ({ user, history }) => (
  <UserContainer onClick={() => history.push(`/users/${user.id}/albums`)}>
    <ContentBlock>
      <UserAvatar src="https://picsum.photos/150" />
      <UserName>{user.name}</UserName>
    </ContentBlock>
  </UserContainer>
);

export default withRouter(User);
