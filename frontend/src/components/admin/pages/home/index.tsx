import React from 'react';
import styled from 'styled-components';
import { Card } from '../../../common/parts/Card/Card';
import { Header } from '../../parts/header';

export const HomePage = () => {
  return (
    <>
      <Header></Header>
      <Wrapper>
        <ButtonContainer>
          <Card
            text="機器・ライセンス管理"
            path="/machine-license-lists"
          ></Card>
        </ButtonContainer>
        <ButtonContainer>
          <Card text="メール設定" path="/mail-setting"></Card>
        </ButtonContainer>
        <ButtonContainer>
          <Card text="社員管理" path="/employee-lists"></Card>
        </ButtonContainer>
        <ButtonContainer>
          <Card text="更新状況" path="/status"></Card>
        </ButtonContainer>
        <ButtonContainer>
          <Card text="パスワードを変更する" path="change-password"></Card>
        </ButtonContainer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 500px;
  margin: 20px auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const ButtonContainer = styled.div`
  padding: 20px 0px;
`;
