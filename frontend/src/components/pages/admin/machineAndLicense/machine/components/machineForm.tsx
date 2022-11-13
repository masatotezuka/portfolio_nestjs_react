import styled from 'styled-components';
import { LabeledInputText } from '../../../../../shared/parts/inputText/labeledInputText';
import { SelectBox } from '../../../../../shared/parts/selectBox/selectBox';
import { Button } from '../../../../../shared/parts/button/button';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  CreateMachine,
  Machine,
  UpdateMachine,
} from '../../../../../../features/types';
import {
  categoryOptions,
  usageStatusOptions,
} from '../../../../../../features/constants/formOptions';
import {
  createMachine,
  updateMachine,
} from '../../../../../../store/machineSlice';
import { useAppDispatch, useAppSelector } from '../../../../../../hooks';
import { employeeFormOptionsSelector } from '../../../../../../store/employeeSlice';
import { toast } from 'react-toastify';

type Props = {
  buttonText: string;
  machineItem: Machine;
  selectedMode: string;
};

export const MachineForm = ({
  buttonText,
  machineItem,
  selectedMode,
}: Props) => {
  const dispatch = useAppDispatch();
  const employeeOptions = useAppSelector(employeeFormOptionsSelector);
  const userName =
    machineItem.userMachines?.user.lastName &&
    machineItem.userMachines?.user.firstName
      ? machineItem.userMachines.user.lastName +
        machineItem.userMachines.user.firstName
      : '';
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateMachine & UpdateMachine>({
    defaultValues: {
      id: machineItem.id,
      symbol: machineItem.symbol,
      name: machineItem.name,
      purchasedAt: machineItem.purchasedAt,
    },
  });

  const onCreateMachineSubmit: SubmitHandler<CreateMachine> = async (data) => {
    try {
      console.log(data.purchasedAt);

      await dispatch(createMachine(data)).unwrap();
      toast.success('登録完了');
      reset();
    } catch (error) {
      toast.error('予期せぬエラーが起こりました。');
    }
  };

  const onUpdateMachineSubmit: SubmitHandler<UpdateMachine> = async (data) => {
    try {
      await dispatch(updateMachine(data)).unwrap();
      toast.success('更新完了');
      reset();
    } catch (error) {
      toast.error('予期せぬエラーが起こりました。');
    }
  };

  return (
    <>
      <form
        onSubmit={
          selectedMode === 'edit'
            ? handleSubmit(onUpdateMachineSubmit)
            : handleSubmit(onCreateMachineSubmit)
        }
      >
        <input type="hidden" {...register('id')} />
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
            firstDisplayName={machineItem.category}
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
            options={employeeOptions}
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
            firstDisplayName={machineItem.usageStatus}
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
