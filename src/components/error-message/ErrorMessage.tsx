import React, { FC } from 'react';
import styled from 'styled-components';

const SpinnerContainer = styled.div`
  width: 250px;
  margin-left: auto;
  margin-right: auto;
`;

type ErrorMessage = { errorMessage: string };

export const ErrorMessage: FC<ErrorMessage> = ({
  errorMessage,
}: ErrorMessage) => <SpinnerContainer>{errorMessage}</SpinnerContainer>;
