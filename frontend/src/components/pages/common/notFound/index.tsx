import styled from 'styled-components';

export const NotFoundPage = () => {
  return <NotFoundText>お探しのページはみつかりません。</NotFoundText>;
};

const NotFoundText = styled.p`
  margin-top: 60px;
  font-size: 20px;
  text-align: center;
`;
