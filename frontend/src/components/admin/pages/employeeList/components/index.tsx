import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../../common/parts/button/button';
import { LabeledInputText } from '../../../../common/parts/inputText/labeledInputText';

type Props = {
  showModal: boolean;
  handleSubmitEmployee: () => void;
  handleCloseModal: () => void;
};

export const Modal = ({
  showModal,
  handleSubmitEmployee,
  handleCloseModal,
}: Props) => {
  return (
    <>
      {showModal ? (
        <Wrapper>
          <Container>
            <Title>社員登録</Title>
            <LabeledInputTextWrapper>
              <LabeledInputTextContainer>
                <LabeledInputText
                  type="text"
                  text="性"
                  forName="firstName"
                  inputWidth={'120px'}
                  labelWidth={'140px'}
                ></LabeledInputText>
                <LabeledInputText
                  type="text"
                  text="名"
                  forName="lastName"
                  inputWidth={'120px'}
                  labelWidth={'20px'}
                ></LabeledInputText>
              </LabeledInputTextContainer>
              <LabeledInputText
                type="email"
                text="メールアドレス"
                forName="employee_email"
                inputWidth={'300px'}
                labelWidth={'140px'}
              ></LabeledInputText>
              <LabeledInputText
                type="text"
                text="パスワード"
                forName="employee_password"
                inputWidth={'300px'}
                labelWidth={'140px'}
              ></LabeledInputText>
            </LabeledInputTextWrapper>
            <ButtonWrapper>
              <ButtonContainer>
                <Button
                  text="登録"
                  onClick={() => handleSubmitEmployee()}
                ></Button>
              </ButtonContainer>
              <ButtonContainer>
                <Button
                  text="戻る"
                  onClick={() => handleCloseModal()}
                  gray
                ></Button>
              </ButtonContainer>
            </ButtonWrapper>
          </Container>
        </Wrapper>
      ) : (
        <></>
      )}
    </>
  );
};

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  position: fixed;
  height: 350px;
  top: 150px;
  left: 25%;
  right: 25%;
  z-index: 5;
  padding: 20px 40px;
  background-color: #ffffff;
`;
const Title = styled.h2`
  text-align: center;
  margin: 10px 0px 20px 0px;
`;

const LabeledInputTextWrapper = styled.div`
  padding: 0px 50px;
`;

const LabeledInputTextContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 100px;
`;

const ButtonContainer = styled.div`
  height: 50px;
  width: 180px;
`;
