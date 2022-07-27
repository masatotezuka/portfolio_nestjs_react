import * as React from 'react';
import styled from 'styled-components';
import { Card } from '../../../common/parts/Card/Card';
import { LabeledInputText } from '../../../common/parts/InputText/LabeledInputText';

export const LoginPage = () => {
  return (
    <Wrapper>
      <Container>
        <InputsContainer>
          <LabeledInputText
            type="email"
            text="メールアドレス"
            forName="login_email"
          ></LabeledInputText>
          <LabeledInputText
            type="password"
            text="パスワード"
            forName="login_password"
          ></LabeledInputText>
        </InputsContainer>
        <ButtonWrapper>
          <Card path="/home" text="ログイン"></Card>
          <Card path="/reset-password" text="パスワードを変更する"></Card>
          <Card path="/register-organization" text="管理者を登録"></Card>
        </ButtonWrapper>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

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

const ButtonWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  height: 250px;
`;
