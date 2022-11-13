import { useForm, SubmitHandler } from 'react-hook-form';
import styled from 'styled-components';
import { Button } from '../../../shared/parts/button/button';
import { LabeledInputText } from '../../../shared/parts/inputText/labeledInputText';
import { Admin } from '../../../../features/types';
import { signUp } from '../../../../features/api';
import { useNavigate } from 'react-router-dom';
import { useCookie } from '../../../../hooks/useCookie';
import { toast } from 'react-toastify';

const ToastMessage = () => {
  return (
    <p>
      管理者登録が完了しました。
      <br /> まずは「社員管理」から社員登録してください。
    </p>
  );
};

export const RegisterOrganizationPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Admin>();
  const navigate = useNavigate();
  const { setAccessToken, setAdminId } = useCookie();

  const onSubmit: SubmitHandler<Admin> = async (data) => {
    try {
      const { accessToken, userId } = await signUp(data);
      setAccessToken(accessToken);
      setAdminId(userId);
      toast.success(<ToastMessage />);
      navigate('/admin');
    } catch (error) {
      toast.error('入力された情報に不備があります。');
    }
  };

  return (
    <>
      <Wrapper>
        <Container>
          <form onSubmit={handleSubmit(onSubmit)}>
            <LabeledInputTextContainer>
              <InputContainer>
                <LabeledInputText
                  type="text"
                  forName="organization"
                  text="組織名"
                  inputWidth={'300px'}
                  labelWidth={'130px'}
                  register={register('adminName', { required: true })}
                  errors={errors.adminName?.type}
                ></LabeledInputText>
              </InputContainer>
              <InputContainer>
                <LabeledInputText
                  type="text"
                  forName="firstName"
                  text="姓"
                  inputWidth={'300px'}
                  labelWidth={'130px'}
                  register={register('firstName', { required: true })}
                  errors={errors.firstName?.type}
                ></LabeledInputText>
              </InputContainer>
              <InputContainer>
                <LabeledInputText
                  type="text"
                  forName="lastName"
                  text="名"
                  inputWidth={'300px'}
                  labelWidth={'130px'}
                  register={register('lastName', { required: true })}
                  errors={errors.lastName?.type}
                ></LabeledInputText>
              </InputContainer>
              <InputContainer>
                <LabeledInputText
                  type="email"
                  forName="lastName"
                  text="メールアドレス"
                  inputWidth={'300px'}
                  labelWidth={'130px'}
                  register={register('email', { required: true })}
                  errors={errors.email?.type}
                ></LabeledInputText>
              </InputContainer>
              <InputContainer>
                <LabeledInputText
                  type="password"
                  forName="lastName"
                  text="パスワード"
                  inputWidth={'300px'}
                  labelWidth={'130px'}
                  placeholder="英数字（大文字/小文字）8〜16字"
                  register={register('password', {
                    required: true,
                    pattern:
                      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])[a-zA-Z\d]{8,16}$/,
                  })}
                  errors={errors.password?.type}
                ></LabeledInputText>
              </InputContainer>
            </LabeledInputTextContainer>
            <ButtonContainer>
              <Button text="登録"></Button>
            </ButtonContainer>
          </form>
        </Container>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div``;

const Container = styled.div`
  max-width: 500px;
  margin: 100px auto 0px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LabeledInputTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  margin: 30px auto;
  width: 250px;
  height: 50px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px 0px;
`;
