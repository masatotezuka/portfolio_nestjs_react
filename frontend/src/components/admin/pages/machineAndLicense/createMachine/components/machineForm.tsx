import React from 'react';
import styled from 'styled-components';
import { LabeledInputText } from '../../../../../common/parts/inputText/labeledInputText';
import { SelectBox } from '../../../../../common/parts/selectBox/selectBox';
import { Button } from '../../../../../common/parts/button/button';
export const MachineForm = () => {
  const options = [
    { id: 1, value: 'pc', text: 'PC' },
    { id: 2, value: 'monitor', text: 'モニター' },
  ];
  return (
    <>
      <form>
        <InputContainer>
          <Text>種別（必須）</Text>
          <SelectBox
            options={options}
            firstDisplayName="種別を選択してください"
            name="machine_category"
          ></SelectBox>
        </InputContainer>
        <InputContainer>
          <LabeledInputText
            type="text"
            text="機器名（必須）"
            forName="create_machine_name"
            inputWidth="300px"
            labelWidth="120px"
          ></LabeledInputText>
        </InputContainer>
        <InputContainer>
          <LabeledInputText
            type="Date"
            text="購入日（必須）"
            forName="create_machine_name"
            inputWidth="300px"
            labelWidth="120px"
          ></LabeledInputText>
        </InputContainer>
        <InputContainer>
          <Text>利用者（任意）</Text>
          <SelectBox
            options={options}
            firstDisplayName="利用者を選択してください"
            name="user_name"
          ></SelectBox>
        </InputContainer>
        <InputContainer>
          <Text>ステータス（必須）</Text>
          <SelectBox
            options={options}
            firstDisplayName="現在のステータスを選択してください"
            name="usage_status"
          ></SelectBox>
        </InputContainer>

        <ButtonWrapper>
          <Button type="submit" text="登録"></Button>
        </ButtonWrapper>
      </form>
    </>
  );
};

const Text = styled.p`
  font-size: 16px;
  margin: 0px;
`;

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 0px;
  align-items: center;
  justify-content: space-between;
`;

const ButtonWrapper = styled.div`
  width: 200px;
  height: 50px;
  margin: 30px auto 0px auto;
`;