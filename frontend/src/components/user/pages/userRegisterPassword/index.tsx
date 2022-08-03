import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../common/parts/button/button';
import { LabeledInputText } from '../../../common/parts/inputText/labeledInputText';

export const UserRegisterPasswordPage = () => {
  return (
    <>
      <Container>
        <InputsContainer>
          <InputContainer>
            <LabeledInputText
              type="password"
              text="パスワード"
              forName="login_password"
              inputWidth={'300px'}
              labelWidth={'180px'}
            ></LabeledInputText>
          </InputContainer>
          <InputContainer>
            <LabeledInputText
              type="password"
              text="パスワード（確認用）"
              forName="login_password_confirm"
              inputWidth={'300px'}
              labelWidth={'180px'}
            ></LabeledInputText>
          </InputContainer>
        </InputsContainer>
        <ButtonContainer>
          <Button text="パスワードを登録"></Button>
        </ButtonContainer>
      </Container>
    </>
  );
};

const Container = styled.div`
  max-width: 500px;
  margin: 100px auto 0px auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const InputsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px 0px;
`;

const ButtonContainer = styled.div`
  width: 250px;
  height: 50px;
  margin: 30px auto;
`;
