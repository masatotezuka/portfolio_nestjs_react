import styled from 'styled-components';
import { ErrorMessage } from '../inputText/styledLabeledInputText';
import { StyledSelectBox } from './styledSelectBox';

type Props = {
  options: { id: number; value: string | number; text: string }[];
  firstDisplayName: string;
  name: string;
  width: string;
  register?: Object;
  errors?: string;
};

export const SelectBox = ({
  options,
  firstDisplayName,
  name,
  width,
  register,
  errors,
}: Props) => {
  return (
    <>
      <Container>
        <StyledSelectBox width={width}>
          <select name={name} {...register}>
            <option value="" key={0}>
              {firstDisplayName}
            </option>
            {options.map((option) => {
              return (
                <option key={option.id} value={option.value}>
                  {option.text}
                </option>
              );
            })}
          </select>
        </StyledSelectBox>
        {errors === 'required' && (
          <ErrorMessage>値を選択してください</ErrorMessage>
        )}
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
