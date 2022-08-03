import React, { useState } from 'react';
import styled from 'styled-components';
import { ConfirmModal } from '../../../common/components/confirmModal';
import { Button } from '../../../common/parts/button/button';

export const UserCheckStatusPage = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleSubmit = () => {
    console.log('confirm');
  };
  return (
    <>
      <Container>
        <Title>
          手塚　真斗さんの機器・ライセンスの使用状況を教えてください
        </Title>
        <RadioButtonsContainer>
          <h4>Macbook</h4>

          <div>
            <input type="radio" name="1" />
            <label htmlFor="">使用中</label>
          </div>
          <div>
            <input type="radio" name="1" />
            <label htmlFor="">未使用中</label>
          </div>
          <div>
            <input type="radio" name="1" />
            <label htmlFor="">破損</label>
          </div>
          <div>
            <input type="radio" name="1" />
            <label htmlFor="">紛失</label>
          </div>
        </RadioButtonsContainer>
        <ButtonContainer>
          <Button
            text="回答完了"
            onClick={() => {
              handleOpenModal();
            }}
          ></Button>
        </ButtonContainer>
      </Container>
      <ConfirmModal
        title="回答完了しますか？"
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        handleConfirm={handleSubmit}
      ></ConfirmModal>
    </>
  );
};

const Container = styled.div`
  margin: 30px auto;
  max-width: 700px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  font-size: 16px;
  text-align: center;
`;
const RadioButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ButtonContainer = styled.div`
  width: 250px;
  height: 50px;
  margin: 30px auto;
`;
