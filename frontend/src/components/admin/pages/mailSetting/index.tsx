import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../common/parts/button/button';
import { LabeledInputText } from '../../../common/parts/inputText/labeledInputText';
import { SelectBox } from '../../../common/parts/selectBox/selectBox';
import { LabeledTextarea } from '../../../common/parts/textarea/labeledTextarea';
import { Header } from '../../parts/header';

export const MailSettingPage = () => {
  const body = `{氏名}さま

お世話になっております。
下記のリンクより、今月の機器・ライセンス利用状況をご回答ください。

ご協力よろしくお願いします。`;
  return (
    <>
      <Header></Header>
      <Container>
        <InputContainer>
          <LabeledInputText
            type="text"
            text="件名"
            forName="title"
            inputWidth="400px"
            labelWidth="130px"
          ></LabeledInputText>
        </InputContainer>

        <InputContainer>
          <LabeledTextarea
            text="本文"
            forName="title"
            textareaWidth="400px"
            labelWidth="130px"
            value={body}
            rows={10}
          ></LabeledTextarea>
        </InputContainer>
        <InputContainer>
          <Title>毎月の送信日</Title>
          <SelectBox
            name="monthlySendAt"
            options={[
              { id: 1, text: '1日', value: '1' },
              { id: 2, text: '5日', value: '5' },
              { id: 3, text: '10日', value: '10' },
              { id: 4, text: '15日', value: '15' },
              { id: 5, text: '20日', value: '25' },
            ]}
            firstDisplayName=""
            width="412px"
          ></SelectBox>
        </InputContainer>

        <InputContainer>
          <label htmlFor="remind">リマインダー</label>
          <CheckboxContainer>
            <input type="checkbox" id="remind" name="remind"></input>
          </CheckboxContainer>
        </InputContainer>
        <ButtonsContainer>
          <ButtonContainer>
            <Button text="確認"></Button>
          </ButtonContainer>
          <ButtonContainer>
            <Button text="メール送信を中止"></Button>
          </ButtonContainer>
        </ButtonsContainer>
        <InputContainer></InputContainer>
      </Container>
    </>
  );
};

const Container = styled.div`
  max-width: 550px;
  margin: 40px auto;
`;

const Title = styled.p`
  font-size: 16px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0px;
`;

const ButtonsContainer = styled.div`
  padding: 30px 20px;
  display: flex;
  justify-content: space-between;
`;

const ButtonContainer = styled.div`
  width: 40%;
  height: 50px;
`;

const CheckboxContainer = styled.div`
  margin: 0px auto;
  input {
    transform: scale(1.5);
  }
`;
