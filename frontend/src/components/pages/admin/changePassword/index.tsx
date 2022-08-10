import React from 'react';
import styled from 'styled-components';
import { Header } from '../../../shared/layout/header';
import { Button } from '../../../shared/parts/button/button';
import { LabeledInputText } from '../../../shared/parts/inputText/labeledInputText';

export const ChangePasswordPage = () => {
  return (
    <>
      <Header></Header>
      <Container>
        <LabeledInputTextContainer>
          <LabeledInputText
            type="password"
            text="現在のパスワード"
            forName="current_password"
            inputWidth="300px"
            labelWidth="220px"
          ></LabeledInputText>
        </LabeledInputTextContainer>
        <LabeledInputTextContainer>
          <LabeledInputText
            type="password"
            text="新しいパスワード"
            forName="new_password"
            inputWidth="300px"
            labelWidth="220px"
          ></LabeledInputText>
        </LabeledInputTextContainer>
        <LabeledInputTextContainer>
          <LabeledInputText
            type="password"
            text="新しいパスワード（確認用）"
            forName="new_confirm_password"
            labelWidth="220px"
            inputWidth="300px"
          ></LabeledInputText>
        </LabeledInputTextContainer>
        <ButtonContainer>
          <Button text="変更する"></Button>
        </ButtonContainer>
      </Container>
    </>
  );
};

const Container = styled.div`
  max-width: 550px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LabeledInputTextContainer = styled.div`
  padding: 20px 0px;
`;

const ButtonContainer = styled.div`
  margin-top: 40px;
  width: 200px;
  height: 50px;
`;
