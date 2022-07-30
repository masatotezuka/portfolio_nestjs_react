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
            inputWidth={'300px'}
            labelWidth={'130px'}
          ></LabeledInputText>
          <LabeledInputText
            type="password"
            text="パスワード"
            forName="login_password"
            inputWidth={'300px'}
            labelWidth={'130px'}
          ></LabeledInputText>
        </InputsContainer>
        <CardsWrapper>
          <CardContainer>
            <Card path="/home" text="ログイン"></Card>
          </CardContainer>
          <CardContainer>
            <Card
              path="/reset-password/request"
              text="パスワードを変更する"
            ></Card>
          </CardContainer>
          <CardContainer>
            <Card path="/register-organization" text="管理者を登録"></Card>
          </CardContainer>
        </CardsWrapper>
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

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardContainer = styled.div`
  width: 250px;
  height: 40px;
  margin: 30px auto;
`;
