import React from 'react';
import styled from 'styled-components';
import { Card } from '../../../shared/parts/card/card';
import { Header } from '../../../shared/layout/header';

export const HomePage = () => {
  return (
    <>
      <Header></Header>
      <Wrapper>
        <CardContainer>
          <Card
            text="機器・ライセンス管理"
            path="machine-license/list"
          ></Card>
        </CardContainer>
        <CardContainer>
          <Card text="メール設定" path="mail/setting"></Card>
        </CardContainer>
        <CardContainer>
          <Card text="社員管理" path="employee"></Card>
        </CardContainer>
        <CardContainer>
          <Card text="更新状況" path="status"></Card>
        </CardContainer>
        <CardContainer>
          <Card text="パスワードを変更する" path="password/change"></Card>
        </CardContainer>
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
const CardContainer = styled.div`
  padding: 30px 0px;
  width: 250px;
  height: 50px;
`;
