import React from 'react';
import { StyledSelectBox } from './styledSelectBox';

type Props = {
  options: { id: number; value: string; text: string }[];
  firstDisplayName: string;
  name: string;
};

export const SelectBox = ({ options, firstDisplayName, name }: Props) => {
  return (
    <>
      <StyledSelectBox>
        <select name={name}>
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
    </>
  );
};
