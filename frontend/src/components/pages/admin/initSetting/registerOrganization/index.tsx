import styled from 'styled-components';
import { Button } from '../../../../shared/parts/button/button';
import { LabeledInputText } from '../../../../shared/parts/inputText/labeledInputText';

export const RegisterOrganizationPage = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <LabeledInputTextContainer>
            <InputContainer>
              <LabeledInputText
                type="text"
                forName="organization"
                text="組織名"
                inputWidth={'300px'}
                labelWidth={'130px'}
              ></LabeledInputText>
            </InputContainer>
            <InputContainer>
              <LabeledInputText
                type="text"
                forName="firstName"
                text="姓"
                inputWidth={'300px'}
                labelWidth={'130px'}
              ></LabeledInputText>
            </InputContainer>
            <InputContainer>
              <LabeledInputText
                type="text"
                forName="lastName"
                text="名"
                inputWidth={'300px'}
                labelWidth={'130px'}
              ></LabeledInputText>
            </InputContainer>
            <InputContainer>
              <LabeledInputText
                type="email"
                forName="lastName"
                text="メールアドレス"
                inputWidth={'300px'}
                labelWidth={'130px'}
              ></LabeledInputText>
            </InputContainer>
            <InputContainer>
              <LabeledInputText
                type="password"
                forName="lastName"
                text="パスワード"
                inputWidth={'300px'}
                labelWidth={'130px'}
              ></LabeledInputText>
            </InputContainer>
          </LabeledInputTextContainer>
          <ButtonContainer>
            <Button text="登録"></Button>
          </ButtonContainer>
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
  margin-top: 30px;
  width: 250px;
  height: 50px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px 0px;
`;
