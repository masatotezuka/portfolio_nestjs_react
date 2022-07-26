import styled from 'styled-components';

export const StyledSelectBox = styled.div<{ width: string }>`
  position: relative;
  width: ${(props) => props.width};
  margin: 0em 0em 0em 0em;
  display: flex;
  align-items: center;
  &::after {
    border: 4px solid transparent;
    border-top: 4.5px solid;
    content: '';
    position: absolute;
    right: 9px;
    top: 50%;
    width: 0px;
    height: 0px;
    pointer-events: none;
  }
  select {
    width: 100%;
    background-color: white;
    appearance: none;
    padding: 5px;
    option {
      font-size: 16px;
      text-align: center;
    }
  }
`;
