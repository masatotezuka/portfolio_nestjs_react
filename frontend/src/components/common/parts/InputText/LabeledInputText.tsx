import {
  StyledInputContainer,
  StyledInputText,
  StyledLabel,
} from './styledLabeledInputText';

type Props = {
  type: 'text' | 'email' | 'password';
  text: string;
  forName: string;
  inputWidth: string;
  labelWidth: string;
  value?: string;
  required?: boolean;
  register?: Object;
};

export const LabeledInputText = (props: Props) => {
  return (
    <>
      <StyledInputContainer>
        <StyledLabel htmlFor={props.forName} width={props.labelWidth}>
          {props.text}
        </StyledLabel>
        <StyledInputText
          id={props.forName}
          type={props.type}
          {...props.register}
          width={props.inputWidth}
        ></StyledInputText>
      </StyledInputContainer>
    </>
  );
};
