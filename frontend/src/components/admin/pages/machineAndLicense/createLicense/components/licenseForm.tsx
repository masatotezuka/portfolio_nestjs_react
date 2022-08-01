import styled from 'styled-components';
import { Button } from '../../../../../common/parts/button/button';
import { LabeledInputText } from '../../../../../common/parts/inputText/labeledInputText';
import { SelectBox } from '../../../../../common/parts/selectBox/selectBox';

export const LicenseForm = () => {
  const options = [
    { id: 1, value: 'pc', text: 'PC' },
    { id: 2, value: 'monitor', text: 'モニター' },
  ];
  const licenseOptions = [
    { id: 1, value: 'test' },
    { id: 2, value: 'test2' },
    { id: 3, value: 'test3' },
  ];

  return (
    <>
      <form>
        <InputContainer>
          <LabeledInputText
            type="text"
            text="ライセンス名（必須）"
            forName="create_license_name"
            inputWidth="300px"
            labelWidth="180px"
            list="license_name"
            placeholder="ライセンスを入力またはを選択してください"
          ></LabeledInputText>
          <datalist id="license_name">
            {licenseOptions.map((option) => {
              return <option key={option.id} value={option.value}></option>;
            })}
          </datalist>
        </InputContainer>
        <InputContainer>
          <LabeledInputText
            type="Date"
            text="購入日（任意）"
            forName="license_purchased_at"
            inputWidth="300px"
            labelWidth="130px"
          ></LabeledInputText>
        </InputContainer>
        <InputContainer>
          <LabeledInputText
            type="Date"
            text="有効期限（必須）"
            forName="license_expired_at"
            inputWidth="300px"
            labelWidth="130px"
          ></LabeledInputText>
        </InputContainer>
        <InputContainer>
          <Text>利用者（任意）</Text>
          <SelectBox
            options={options}
            firstDisplayName="利用者を選択してください"
            name="user_name"
          ></SelectBox>
        </InputContainer>
        <InputContainer>
          <Text>ステータス（必須）</Text>
          <SelectBox
            options={options}
            firstDisplayName="現在のステータスを選択してください"
            name="usage_status"
          ></SelectBox>
        </InputContainer>
        <ButtonWrapper>
          <Button type="submit" text="登録"></Button>
        </ButtonWrapper>
      </form>
    </>
  );
};

const Text = styled.p`
  font-size: 16px;
  margin: 0px;
`;

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 0px;
  align-items: center;
  justify-content: space-between;
`;

const ButtonWrapper = styled.div`
  width: 200px;
  height: 50px;
  margin: 30px auto 0px auto;
`;