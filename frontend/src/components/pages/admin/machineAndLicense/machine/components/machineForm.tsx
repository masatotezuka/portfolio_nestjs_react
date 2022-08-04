import styled from 'styled-components';
import { LabeledInputText } from '../../../../../shared/parts/inputText/labeledInputText';
import { SelectBox } from '../../../../../shared/parts/selectBox/selectBox';
import { Button } from '../../../../../shared/parts/button/button';

type Props = {
  buttonText: string;
  machine: {
    category: string;
    name: string;
    purchasedAt: Date | string;
    user: string;
    usageStatus: string;
  };
};

export const MachineForm = ({ buttonText, machine }: Props) => {
  const options = [
    { id: 1, value: 'pc', text: 'PC' },
    { id: 2, value: 'monitor', text: 'モニター' },
  ];

  return (
    <>
      <form>
        <InputContainer>
          <Text>種別（必須）</Text>
          <SelectBox
            options={options}
            firstDisplayName={machine.category}
            name="machine_category"
            width="314px"
          ></SelectBox>
        </InputContainer>
        <InputContainer>
          <LabeledInputText
            type="text"
            text="機器名（必須）"
            value={machine.name}
            forName="machine_name"
            inputWidth="300px"
            labelWidth="120px"
          ></LabeledInputText>
        </InputContainer>
        <InputContainer>
          <LabeledInputText
            type="date"
            text="購入日（必須）"
            value={machine.purchasedAt.toString()}
            forName="machine_purchased_at"
            inputWidth="300px"
            labelWidth="120px"
          ></LabeledInputText>
        </InputContainer>
        <InputContainer>
          <Text>利用者（任意）</Text>
          <SelectBox
            options={options}
            firstDisplayName={machine.user}
            name="user_name"
            width="314px"
          ></SelectBox>
        </InputContainer>
        <InputContainer>
          <Text>ステータス（必須）</Text>
          <SelectBox
            options={options}
            firstDisplayName={machine.usageStatus}
            name="machine_usage_status"
            width="314px"
          ></SelectBox>
        </InputContainer>
        <ButtonWrapper>
          <Button type="submit" text={buttonText}></Button>
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
