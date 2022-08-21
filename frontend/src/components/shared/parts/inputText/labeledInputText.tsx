import {
  Container,
  StyledInputContainer,
  StyledInputText,
  StyledLabel,
  ErrorMessage,
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
  errors?: string;
  list?: string;
  placeholder?: string;
};

export const LabeledInputText = (props: Props) => {
  return (
    <>
      <Container>
        <StyledLabel htmlFor={props.forName} width={props.labelWidth}>
          {props.text}
        </StyledLabel>
        <StyledInputContainer>
          <StyledInputText
            id={props.forName}
            value={props.value}
            type={props.type}
            {...props.register}
            width={props.inputWidth}
            list={props.list}
            placeholder={props.placeholder}
            {...props.register}
          ></StyledInputText>

          {props.errors === 'required' && (
            <ErrorMessage>文字を入力して下さい</ErrorMessage>
          )}
          {props.errors === 'pattern' && (
            <ErrorMessage>
              英数字（大文字/小文字）8〜16字で入力して下さい
            </ErrorMessage>
          )}
        </StyledInputContainer>
      </Container>
    </>
  );
};
