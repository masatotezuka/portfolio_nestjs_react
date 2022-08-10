import styled from 'styled-components';
import { Card } from '../../../shared/parts/card/card';
import { LabeledInputText } from '../../../shared/parts/inputText/labeledInputText';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '../../../shared/parts/button/button';
import { login } from '../../../../features/api';
import { useCookies, Cookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
type Inputs = {
  email: string;
  password: string;
};

export const LoginPage = () => {
  const [cookie, setCookie] = useCookies(['token', 'test']);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const navigator = useNavigate();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const result = await login(data);
    setCookie('token', result.data.accessToken);
    navigator('/admin');
  };
  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputsContainer>
          <InputContainer>
            <LabeledInputText
              type="email"
              text="メールアドレス"
              forName="login_email"
              inputWidth={'300px'}
              labelWidth={'130px'}
              register={register('email', { required: true })}
              errors={errors.email?.type}
            ></LabeledInputText>
          </InputContainer>
          <InputContainer>
            <LabeledInputText
              type="password"
              text="パスワード"
              forName="login_password"
              inputWidth={'300px'}
              labelWidth={'130px'}
              placeholder="英数字（大文字/小文字）8〜16字"
              register={register('password', {
                required: true,
                pattern: /^[a-zA-Z\d]{8,16}/,
              })}
              errors={errors.password?.type}
            ></LabeledInputText>
          </InputContainer>
        </InputsContainer>
        <ButtonContainer>
          <Button text="ログイン" type="submit"></Button>
        </ButtonContainer>
      </form>
      <CardsWrapper>
        <CardContainer>
          <Card
            path="/reset-password/request"
            text="パスワードを変更する"
          ></Card>
        </CardContainer>
        <CardContainer>
          <Card path="/admin/create" text="管理者を登録"></Card>
        </CardContainer>
      </CardsWrapper>
    </Container>
  );
};

const Container = styled.div`
  max-width: 500px;
  margin: 100px auto 0px auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const InputsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px 0px;
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardContainer = styled.div`
  width: 250px;
  height: 50px;
  margin: 30px auto;
`;

const ButtonContainer = styled.div`
  width: 250px;
  height: 50px;
  margin: 30px auto;
`;
