import React from 'react';
import styled from 'styled-components';
import { Button } from '../../parts/button/button';

type Props = {
  title: string;
  showModal: boolean;
  handleConfirm: () => void;
  handleCloseModal: () => void;
};

export const ConfirmModal = ({
  title,
  showModal,
  handleConfirm,
  handleCloseModal,
}: Props) => {
  return (
    <>
      {showModal ? (
        <Wrapper>
          <Container>
            <Title>{title}</Title>
            <ButtonWrapper>
              <ButtonContainer>
                <Button text="はい" onClick={() => handleConfirm()}></Button>
              </ButtonContainer>
              <ButtonContainer>
                <Button
                  text="いいえ"
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
  /* max-width: 400px; */
  width: 400px;
  height: 150px;
  top: 150px;
  left: 50%;
  z-index: 5;
  padding: 20px 40px;
  background-color: #ffffff;
  transform: translate(-50%);
`;
const Title = styled.p`
  font-size: 16px;
  text-align: center;
  margin: 20px 0px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ButtonContainer = styled.div`
  height: 50px;
  width: 120px;
`;
