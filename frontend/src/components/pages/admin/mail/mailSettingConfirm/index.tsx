import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../../shared/parts/button/button';
import { Header } from '../../../parts/header';

export const MailSettingConfirm = () => {
  const body = `{氏名}さま

お世話になっております。
下記のリンクより、今月の機器・ライセンス利用状況をご回答ください。

ご協力よろしくお願いします。`;
  return (
    <>
      <Header></Header>
      <Container>
        <ContentContainer>
          <TitleContainer>件名</TitleContainer>
          <TextContainer>機器・ライセンス利用状況更新のお願い</TextContainer>
        </ContentContainer>
        <ContentContainer>
          <TitleContainer>メール文</TitleContainer>
          <TextContainer>{body}</TextContainer>
        </ContentContainer>
        <ContentContainer>
          <TitleContainer>送信日</TitleContainer>
          <TextContainer>毎月15日</TextContainer>
        </ContentContainer>
        <ContentContainer>
          <TitleContainer>リマインダー</TitleContainer>
          <TextContainer>未回答者が回答するまでリマインドする</TextContainer>
        </ContentContainer>
        <ButtonContainer>
          <Button
            text="送信設定完了"
            onClick={() =>
              window.alert(
                '利用状況を確認する機器・ライセンスがありません。「機器・ライセンス管理」から利用状況を確認してください。',
              )
            }
          ></Button>
        </ButtonContainer>
      </Container>
    </>
  );
};
const Container = styled.div`
  max-width: 500px;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
`;

const TitleContainer = styled.p`
  font-size: 16px;
  width: 100px;
  display: flex;
  align-items: center;
`;
const TextContainer = styled.p`
  font-size: 16px;
  width: 350px;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ButtonContainer = styled.div`
  margin: 40px auto;
  width: 200px;
  height: 50px;
`;
