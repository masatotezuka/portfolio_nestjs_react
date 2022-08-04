import React from 'react';
import styled from 'styled-components';

export const ConfirmResetPasswordPage = () => {
  return (
    <>
      <TextContainer>
        <Text>
          手塚　真斗様 下記のアドレスにメールの送信が完了しました。
          <br />
          <br />
          XXXX@gmail.com <br />
          <br />
          メールにしたがって、12時間以内にパスワードを設定してください。
          <br />
          メールが届かない場合には、メールボックスをご確認いただくか、
          <br />
          迷惑メール設定を、上記メールアドレスから届くように設定しなおしてから、
          <br />
          再度ご登録ください。
        </Text>
      </TextContainer>
    </>
  );
};

const TextContainer = styled.div`
  max-width: 650px;
  margin: 70px auto 0px auto;
`;

const Text = styled.p`
  font-size: 16px;
`;
