import styled from 'styled-components';

export const StyledInputContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
  padding: 10px 0px 10px 0px;
`;

export const StyledInputText = styled.input<{ width: string }>`
  display: flex;
  width: ${(props) => props.width};
  padding: 5px;
`;

export const StyledLabel = styled.label<{ width: string }>`
  font-size: 16px;
  padding: 0px 10px;
  width: ${(props) => props.width};
  color: #000000;
`;
