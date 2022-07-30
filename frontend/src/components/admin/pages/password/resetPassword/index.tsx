import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../../common/parts/Button/Button';
import { LabeledInputText } from '../../../../common/parts/InputText/LabeledInputText';

export const ResetPasswordPage = () => {
  return (
    <Container>
      <Text>メールアドレスを入力してください</Text>
      <LabeledInputText
        type="email"
        text="メールアドレス"
        forName="reset_password_email"
        inputWidth="300px"
        labelWidth="120px"
      ></LabeledInputText>
      <ButtonWrapper>
        <Button text="パスワードをリセット"></Button>
      </ButtonWrapper>
    </Container>
  );
};

const Text = styled.p`
  font-size: 16px;
  margin-bottom: 30px;
`;

const Container = styled.div`
  max-width: 500px;
  margin: 0px auto;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  margin-top: 70px;
  height: 60px;
  width: 200px;
`;
