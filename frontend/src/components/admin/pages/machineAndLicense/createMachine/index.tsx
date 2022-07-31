import styled from 'styled-components';
import { Header } from '../../../parts/header';
import { MachineForm } from './components/machineForm';

export const CreateMachinePage = () => {
  return (
    <>
      <Header></Header>
      <Container>
        <MachineForm></MachineForm>
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
