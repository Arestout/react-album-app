import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../logo.svg';

const HeaderContainer = styled.header`
  min-height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  background-color: #1c1d22;
`;

const LogoContainer = styled(Link)`
  height: 100%;
  width: 250px;
  padding: 25px;
  background-color: #1c1d22;
`;

const LogoTitle = styled.p`
  text-transform: uppercase;
  text-align: center;
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
        <LogoTitle>Photo album App</LogoTitle>
      </LogoContainer>
    </HeaderContainer>
  );
};
