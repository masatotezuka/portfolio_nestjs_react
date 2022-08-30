import styled from 'styled-components';
import { LabeledInputText } from '../../../../../shared/parts/inputText/labeledInputText';
import { SelectBox } from '../../../../../shared/parts/selectBox/selectBox';
import { Button } from '../../../../../shared/parts/button/button';
import { useForm, SubmitHandler } from 'react-hook-form';
import { CreateMachine } from '../../../../../../features/types';
import {
  categoryOptions,
  usageStatusOptions,
} from '../../../../../../features/constants/formOptions';
import { createMachine } from '../../../../../../store/machineSlice';
import { useAppDispatch } from '../../../../../../hooks';

type Props = {
  buttonText: string;
  userMachine: UserMachine;
};

type UserMachine = {
  id?: number;
  symbol: string;
  category: string;
  name: string;
  purchasedAt: Date | string;
  user: User;
  usageStatus: string;
};

type User = {
  userId?: number;
  firstName: string;
  lastName: string;
  email?: string;
};

export const MachineForm = ({ buttonText, userMachine }: Props) => {
  const userName = userMachine.user.firstName + userMachine.user.lastName;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateMachine>({
    defaultValues: {
      name: userName,
      purchasedAt: userMachine.purchasedAt,
    },
  });

  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<CreateMachine> = (data) => {
    dispatch(createMachine(data));
    window.alert('登録完了');
  };

  //TODO: 利用者のデータをfetch
  const userOptions = [
    { id: 1, value: 1, text: 'Tezuka' },
    { id: 2, value: 2, text: 'Yamada' },
  ];

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <LabeledInputText
            type="text"
            text="機器ID（必須）"
            forName="machine_symbol"
            inputWidth="300px"
            labelWidth="120px"
            register={register('symbol', { required: true })}
            errors={errors.symbol?.type}
          ></LabeledInputText>
        </InputContainer>
        <InputContainer>
          <Text>種別（必須）</Text>
          <SelectBox
            options={categoryOptions}
            firstDisplayName={userMachine.category}
            name="machine_category"
            width="314px"
            register={register('category', { required: true })}
            errors={errors.category?.type}
          ></SelectBox>
        </InputContainer>
        <InputContainer>
          <LabeledInputText
            type="text"
            text="機器名（必須）"
            forName="machine_name"
            inputWidth="300px"
            labelWidth="120px"
            register={register('name', { required: true })}
            errors={errors.name?.type}
          ></LabeledInputText>
        </InputContainer>
        <InputContainer>
          <LabeledInputText
            type="date"
            text="購入日（必須）"
            forName="machine_purchased_at"
            inputWidth="300px"
            labelWidth="120px"
            register={register('purchasedAt', { required: true })}
            errors={errors.purchasedAt?.type}
          ></LabeledInputText>
        </InputContainer>
        <InputContainer>
          <Text>利用者（任意）</Text>
          <SelectBox
            options={userOptions}
            firstDisplayName={userName}
            name="user_name"
            width="314px"
            register={register('userId')}
            errors={errors.userId?.type}
          ></SelectBox>
        </InputContainer>
        <InputContainer>
          <Text>ステータス（必須）</Text>
          <SelectBox
            options={usageStatusOptions}
            firstDisplayName={userMachine.usageStatus}
            name="machine_usage_status"
            width="314px"
            register={register('usageStatus', { required: true })}
            errors={errors.usageStatus?.type}
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
