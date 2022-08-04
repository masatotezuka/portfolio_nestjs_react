import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../shared/parts/button/button';
import { Card } from '../../../shared/parts/card/card';
import { LabeledInputText } from '../../../shared/parts/inputText/labeledInputText';

export const UserLoginPage = () => {
  return (
    <>
      <Container>
        <InputsContainer>
          <InputContainer>
            <LabeledInputText
              type="email"
              text="メールアドレス"
              forName="login_email"
              inputWidth={'300px'}
              labelWidth={'130px'}
            ></LabeledInputText>
          </InputContainer>
          <InputContainer>
            <LabeledInputText
              type="password"
              text="パスワード"
              forName="login_password"
              inputWidth={'300px'}
              labelWidth={'130px'}
            ></LabeledInputText>
          </InputContainer>
        </InputsContainer>
        <ButtonsContainer>
          <ButtonContainer>
            <Button text="ログイン"></Button>
          </ButtonContainer>
          <ButtonContainer>
            <Card path="/reset-password/request" text="パスワードを変更する"></Card>
          </ButtonContainer>
        </ButtonsContainer>
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

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  width: 250px;
  height: 50px;
  margin: 30px auto;
`;
