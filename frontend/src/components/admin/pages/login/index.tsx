import * as React from 'react';
import styled from 'styled-components';
import { Card } from '../../../common/parts/Card/Card';
import { LabeledInputText } from '../../../common/parts/InputText/LabeledInputText';

export const LoginPage = () => {
  return (
    <Wrapper>
      <Container>
        <InputsContainer>
          <InputContainer>
            <Label>メールアドレス</Label>
            <InputText type="text"></InputText>
          </InputContainer>
          <InputContainer>
            <Label>パスワード</Label>
            <InputText type="text"></InputText>
          </InputContainer>
        </InputsContainer>
        <ButtonWrapper>
          <Card path="/home" text="ログイン"></Card>
          <Button>ログイン</Button>
          <Button>パスワードを変更する</Button>
          <Button>管理者を登録</Button>
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

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0px 10px 0px;
`;

const InputText = styled.input`
  display: flex;
  width: 350px;
  padding: 5px;
`;

const Label = styled.label`
  font-size: 16px;
  color: #000000;
  padding-right: 20px;
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

const Button = styled.button`
  border-radius: 10px;
  font-weight: bold;
  background-color: rgba(91, 134, 200, 1);
  color: rgba(255, 255, 255, 1);
  text-align: center;
  border: none;
  width: 200px;
  height: 50px;
  &:hover {
    cursor: pointer;
  }
`;
