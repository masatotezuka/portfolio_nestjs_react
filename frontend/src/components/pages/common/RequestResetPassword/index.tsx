import { useForm, SubmitHandler } from 'react-hook-form';
import styled from 'styled-components';
import { Button } from '../../../shared/parts/button/button';
import { LabeledInputText } from '../../../shared/parts/inputText/labeledInputText';
import { RequestPasswordReset } from '../../../../features/types';
import { requestPasswordReset } from '../../../../features/api';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ConfirmResetPasswordPage } from '../confirmResetPassword';

export const RequestResetPasswordPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RequestPasswordReset>();
  const navigate = useNavigate();
  const [userEmail, setEmail] = useState<string>('');
  const onSubmit: SubmitHandler<RequestPasswordReset> = async (data) => {
    await requestPasswordReset(data);
    setEmail(data.email);
  };

  return (
    <>
      {!userEmail ? (
        <>
          <Container>
            <Text>メールアドレスを入力してください</Text>
            <form onSubmit={handleSubmit(onSubmit)}>
              <LabeledInputText
                type="email"
                text="メールアドレス"
                forName="reset_password_email"
                inputWidth="300px"
                labelWidth="120px"
                register={register('email', { required: true })}
                errors={errors.email?.type}
              ></LabeledInputText>
              <ButtonWrapper>
                <Button text="パスワードをリセット"></Button>
              </ButtonWrapper>
            </form>
          </Container>
        </>
      ) : (
        <>
          <ConfirmResetPasswordPage
            userEmail={userEmail}
          ></ConfirmResetPasswordPage>
        </>
      )}
    </>
  );
};

const Text = styled.p`
  font-size: 16px;
  margin-bottom: 30px;
`;

const Container = styled.div`
  max-width: 500px;
  margin: 0px auto;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  margin-top: 70px;
  height: 60px;
  width: 200px;
`;
