import {
  StyledInputContainer,
  StyledInputText,
  StyledLabel,
} from './styledLabeledInputText';

type Props = {
  type: 'text' | 'email' | 'password';
  text: string;
  forName: string;
  value?: string;
  required?: boolean;
  register?: Object;
};

export const LabeledInputText = (props: Props) => {
  return (
    <>
      <StyledInputContainer>
        <StyledLabel htmlFor={props.forName}>{props.text}</StyledLabel>
        <StyledInputText
          id={props.forName}
          type={props.type}
          {...props.register}
        ></StyledInputText>
      </StyledInputContainer>
    </>
  );
};
