import styled from 'styled-components';

export const ErrorPage = () => {
  return (
    <Container>
      <ErrorMessage>
        エラーが発生しました。しばらくしてから再度お試しください。
      </ErrorMessage>
    </Container>
  );
};

const ErrorMessage = styled.p`
  font-size: 16px;
`;

const Container = styled.div`
  max-width: 500px;
  margin: 100px auto;
`;
