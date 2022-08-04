import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../../shared/parts/button/button';

type Props = {
  // title: string;
  showModal: boolean;
  // handleConfirm: () => void;
  // handleCloseModal: () => void;
};

export const ReasonForApprovalForm = ({ showModal }: Props) => {
  console.log(showModal);

  return (
    <>
      {showModal ? (
        <Wrapper>
          <Container>
            <Title>承認理由をご記入ください</Title>
            <Input type="text"></Input>
            <ButtonContainer>
              <Button text="送信"></Button>
            </ButtonContainer>
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
  background-color: #ffffff;
  display: flex;
  z-index: 15;
  position: fixed;
  top: 30%;
  left: 30%;
  right: 30%;
  flex-direction: column;
  align-items: center;
  height: 250px;
`;

const Title = styled.p`
  padding: 10px 0px;
`;

const Input = styled.input`
  width: 300px;
  height: 30px;
  font-size: 16px;
`;
const ButtonContainer = styled.div`
  height: 40px;
  width: 150px;
  padding: 40px 0px;
`;
