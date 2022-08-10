import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const StyledInputText = styled.input<{ width: string }>`
  display: flex;
  width: ${(props) => props.width};
  padding: 5px;
`;

export const StyledLabel = styled.label<{ width: string }>`
  font-size: 16px;
  width: ${(props) => props.width};
  color: #000000;
`;

export const ErrorMessage = styled.p`
  font-size: 12px;
  margin-top: 5px;
  color: red;
  text-align: right;
`;
