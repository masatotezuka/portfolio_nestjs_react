import styled from 'styled-components';
import { Button } from '../../../common/parts/Button/Button';
import { LabeledInputText } from '../../../common/parts/InputText/LabeledInputText';

export const RegisterOrganizationPage = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <LabeledInputTextContainer>
            <LabeledInputText
              type="text"
              forName="organization"
              text="組織名"
            ></LabeledInputText>
            <LabeledInputText
              type="text"
              forName="firstName"
              text="姓"
            ></LabeledInputText>
            <LabeledInputText
              type="text"
              forName="lastName"
              text="名"
            ></LabeledInputText>
            <LabeledInputText
              type="email"
              forName="lastName"
              text="メールアドレス"
            ></LabeledInputText>
            <LabeledInputText
              type="password"
              forName="lastName"
              text="パスワード"
            ></LabeledInputText>
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
