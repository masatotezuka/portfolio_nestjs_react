import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useCookie } from '../../../../hooks/useCookie';
import { Button } from '../../parts/button/button';

export const Header = () => {
  const { removeAccessToken } = useCookie();
  const navigate = useNavigate();
  const handleLogout = () => {
    removeAccessToken();
    navigate('/');
  };
  return (
    <Wrapper>
      <Container>
        <StyledLink to="/admin">ホーム</StyledLink>
        <ButtonContainer>
          <Button text="ログアウト" onClick={() => handleLogout()}></Button>{' '}
        </ButtonContainer>
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

const ButtonContainer = styled.div`
  margin-right: 30px;
`;
