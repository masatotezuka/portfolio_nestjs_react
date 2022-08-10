import styled from 'styled-components';

export const StyledTextareaContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const StyledTextarea = styled.textarea<{ width: string }>`
  display: flex;
  width: ${(props) => props.width};
  padding: 5px;
`;

export const StyledLabel = styled.label<{ width: string }>`
  font-size: 16px;
  width: ${(props) => props.width};
  color: #000000;
`;
