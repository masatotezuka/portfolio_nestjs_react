import {
  StyledInputContainer,
  StyledInputText,
  StyledLabel,
} from './styledLabeledInputText';

type Props = {
  type: 'text' | 'email' | 'password' | 'date';
  text: string;
  forName: string;
  inputWidth: string;
  labelWidth: string;
  value?: string;
  required?: boolean;
  register?: Object;
  list?: string;
  placeholder?: string;
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
          value={props.value}
          type={props.type}
          {...props.register}
          width={props.inputWidth}
          list={props.list}
          placeholder={props.placeholder}
        ></StyledInputText>
      </StyledInputContainer>
    </>
  );
};
