import styled from 'styled-components';

export const StyledButton = styled.button<{ gray: boolean | undefined }>`
  border-radius: 10px;
  font-weight: bold;
  background-color: ${(props) =>
    props.gray ? '#6F6D6D' : 'rgba(91, 134, 200, 1)'};
  color: rgba(255, 255, 255, 1);
  text-align: center;
  border: none;
  text-decoration: none;
  width: 100%;
  height: 100%;
  font-size: 16px;
  &:hover {
    cursor: pointer;
  }
`;
