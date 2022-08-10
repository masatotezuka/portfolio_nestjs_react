import {
  StyledLabel,
  StyledTextarea,
  StyledTextareaContainer,
} from './styledTextarea';

type Props = {
  text: string;
  forName: string;
  textareaWidth: string;
  labelWidth: string;
  value?: string;
  required?: boolean;
  register?: Object;
  list?: string;
  placeholder?: string;
  cols?: number;
  rows?: number;
};

export const LabeledTextarea = (props: Props) => {
  return (
    <>
      <StyledTextareaContainer>
        <StyledLabel htmlFor={props.forName} width={props.labelWidth}>
          {props.text}
        </StyledLabel>
        <StyledTextarea
          id={props.forName}
          width={props.textareaWidth}
          value={props.value}
          {...props.register}
          cols={props.cols}
          rows={props.rows}
          placeholder={props.placeholder}
        ></StyledTextarea>
      </StyledTextareaContainer>
    </>
  );
};
