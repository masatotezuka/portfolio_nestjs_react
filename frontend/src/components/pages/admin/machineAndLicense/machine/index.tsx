import styled from 'styled-components';
import { Header } from '../../../../shared/layout/header';
import { MachineForm } from './components/machineForm';
import { useLocation, useParams } from 'react-router-dom';
import { useAppSelector } from '../../../../../hooks';
import { selectMachineById } from '../../../../../store/machineSlice';
import { Machine } from '../../../../../features/types';

export const MachinePage = () => {
  const location = useLocation();
  const urlParams = useParams<{ id: string }>();
  const paramsId = Number(urlParams.id);
  const initMachine = {
    id: 0,
    category: '種別を選択してください',
    symbol: '',
    name: '',
    purchasedAt: Date(),
    updatedAt: '',
    user: { id: 0, firstName: '', lastName: '' },
    usageStatus: '現在のステータスを選択してください',
  };
  const machineItem = useAppSelector((state) =>
    selectMachineById(state, paramsId),
  );
  if (!machineItem) return null;

  return (
    <>
      <Header></Header>
      <Container>
        {location.pathname === '/admin/machine-license/machine/create' && (
          <MachineForm
            buttonText="登録"
            machineItem={initMachine}
          ></MachineForm>
        )}
        {location.pathname ===
          `/admin/machine-license/machine/edit/${urlParams.id}` && (
          <MachineForm
            buttonText="更新"
            machineItem={machineItem}
          ></MachineForm>
        )}
      </Container>
    </>
  );
};

const Container = styled.div`
  max-width: 550px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
