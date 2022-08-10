import styled from 'styled-components';
import { Header } from '../../../../shared/layout/header';
import { MachineForm } from './components/machineForm';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';

export const MachinePage = () => {
  const location = useLocation();

  //TODO: 更新と登録の関数を作成して、MachineFormに渡す
  //型は同じ、APIを変える
  const initMachine = {
    category: '種別を選択してください',
    name: '',
    purchasedAt: Date(),
    user: '利用者を選択してください',
    usageStatus: '現在のステータスを選択してください',
  };
  const machine = {
    category: 'PC',
    name: 'MacBook',
    purchasedAt: format(new Date(2022, 3 - 1, 2), 'yyyy-MM-dd'),
    user: 'tezuka',
    usageStatus: '使用中',
  };

  return (
    <>
      <Header></Header>
      <Container>
        {location.pathname === '/admin/machine-license/machine/create' && (
          <MachineForm buttonText="登録" machine={initMachine}></MachineForm>
        )}
        {location.pathname === '/admin/machine-license/machine/edit' && (
          <MachineForm buttonText="更新" machine={machine}></MachineForm>
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
