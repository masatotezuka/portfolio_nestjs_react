import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = () => {
  return (
    <Wrapper>
      <Container>
        <StyledLink to="/home">ホーム</StyledLink>
        <StyledButton>ログアウト</StyledButton>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: rgba(91, 134, 200, 1);
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 0px 20px;
  font-size: 16px;
  font-weight: bold;
`;

const StyledButton = styled.button`
  background-color: rgba(255, 255, 255, 0);
  border: none;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 0px 20px;
  &:hover {
    cursor: pointer;
  }
`;
