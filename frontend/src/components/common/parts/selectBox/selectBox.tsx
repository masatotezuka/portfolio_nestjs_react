import React from 'react';
import { StyledSelectBox } from './styledSelectBox';

type Props = {
  options: { value: string; text: string }[];
  firstDisplayName: string;
  name: string;
};

export const SelectBox = ({ options, firstDisplayName, name }: Props) => {
  return (
    <>
      <StyledSelectBox>
        <select name={name}>
          <option value="" >
            {firstDisplayName}
          </option>
          {options.map((option) => {
            return <option value={option.value}>{option.text}</option>;
          })}
        </select>
      </StyledSelectBox>
    </>
  );
};
