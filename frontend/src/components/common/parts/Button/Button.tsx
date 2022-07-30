import React from 'react';
import { StyledButton } from './styledButton';

type Props = {
  text: string;
  onClick?: () => void;
  type?: 'submit' | 'button' | 'reset';
  gray?: boolean;
};

export const Button = (props: Props) => {
  return (
    <StyledButton onClick={props.onClick} type={props.type} gray={props.gray}>
      {props.text}
    </StyledButton>
  );
};
