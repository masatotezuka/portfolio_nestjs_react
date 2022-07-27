import React from 'react';
import { StyledButton } from './styledButton';

type Props = {
  text: string;
  onClick?: () => void;
  type?: 'submit' | 'button' | 'reset';
};

export const Button = (props: Props) => {
  return (
    <StyledButton onClick={props.onClick} type={props.type}>
      {props.text}
    </StyledButton>
  );
};
