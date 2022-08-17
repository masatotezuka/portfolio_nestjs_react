import { SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { verifyPassword } from '../../../../features/api';
import { VerifyPassword } from '../../../../features/types';
import { Button } from '../../../shared/parts/button/button';
import { LabeledInputText } from '../../../shared/parts/inputText/labeledInputText';

export const VerifyPasswordPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<VerifyPassword>();
  const { token } = useParams();

  const onSubmit: SubmitHandler<VerifyPassword> = async (data) => {
    const patchData = { ...data, token: token };
    await verifyPassword(patchData);
    window.alert('パスワードがリセットされました。');
    reset();
  };

  return (
    <>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <LabeledInputTextContainer>
            <LabeledInputText
              type="password"
              text="新しいパスワード"
              forName="new_password"
              inputWidth="300px"
              labelWidth="150px"
              placeholder="英数字（大文字/小文字）8〜16字"
              register={register('newPassword', {
                required: true,
                pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])[a-zA-Z\d]{8,16}$/,
              })}
              errors={errors.newPassword?.type}
            ></LabeledInputText>
          </LabeledInputTextContainer>
          <LabeledInputTextContainer>
            <LabeledInputText
              type="password"
              text="パスワード（確認用）"
              forName="confirm_password"
              inputWidth="300px"
              labelWidth="180px"
              register={register('confirmPassword', {
                required: true,
                pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])[a-zA-Z\d]{8,16}$/,
              })}
              errors={errors.confirmPassword?.type}
            ></LabeledInputText>
          </LabeledInputTextContainer>
          <ButtonContainer>
            <Button text="パスワードを登録" type="submit"></Button>
          </ButtonContainer>
        </form>
      </Container>
    </>
  );
};

const Container = styled.div`
  max-width: 550px;
  margin: 80px auto;
  display: flex;
`;
const LabeledInputTextContainer = styled.div`
  margin: 30px 0px;
`;

const ButtonContainer = styled.div`
  margin: 40px auto;
  width: 200px;
  height: 60px;
`;
