import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styled from 'styled-components';
import { Button } from '../../../../shared/parts/button/button';
import { LabeledInputText } from '../../../../shared/parts/inputText/labeledInputText';
import { User } from '../../../../../features/types';
import { useAppDispatch } from '../../../../../hooks';
import { createUser } from '../../../../../store/userSlice';

type Props = {
  showModal: boolean;
  handleSubmitEmployee: () => void;
  handleCloseModal: () => void;
};

export const CreateEmployeeModal = ({
  showModal,
  handleSubmitEmployee,
  handleCloseModal,
}: Props) => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<User>();
  const onSubmit: SubmitHandler<User> = async (data) => {
    try {
      dispatch(createUser(data));
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {showModal ? (
        <Wrapper>
          <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Title>登録</Title>
              <LabeledInputTextWrapper>
                <LabeledInputsTextContainer>
                  <LabeledInputTextContainer>
                    <LabeledInputText
                      type="text"
                      text="性"
                      forName="lastName"
                      inputWidth={'130px'}
                      labelWidth={'155px'}
                      register={register('lastName', { required: true })}
                      errors={errors.lastName?.type}
                    ></LabeledInputText>
                  </LabeledInputTextContainer>
                  <LabeledInputTextContainer>
                    <LabeledInputText
                      type="text"
                      text="名"
                      forName="firstName"
                      inputWidth={'130px'}
                      labelWidth={'40px'}
                      register={register('firstName', { required: true })}
                      errors={errors.firstName?.type}
                    ></LabeledInputText>
                  </LabeledInputTextContainer>
                </LabeledInputsTextContainer>
                <LabeledInputTextContainer>
                  <LabeledInputText
                    type="email"
                    text="メールアドレス"
                    forName="employee_email"
                    inputWidth={'350px'}
                    labelWidth={'140px'}
                    register={register('email', { required: true })}
                    errors={errors.email?.type}
                  ></LabeledInputText>
                </LabeledInputTextContainer>
                {/* <LabeledInputTextContainer>
                <LabeledInputText
                  type="text"
                  text="パスワード"
                  forName="employee_password"
                  inputWidth={'350px'}
                  labelWidth={'140px'}
                ></LabeledInputText>
              </LabeledInputTextContainer> */}
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
            </form>
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
  max-width: 600px;
  left: 25%;
  /* right: 25%; */
  z-index: 5;
  padding: 20px 50px;
  background-color: #ffffff;
`;
const Title = styled.h2`
  text-align: center;
  margin: 10px 0px 20px 0px;
`;

const LabeledInputTextWrapper = styled.div`
  padding: 0px 50px;
`;

const LabeledInputsTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LabeledInputTextContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0px;
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
