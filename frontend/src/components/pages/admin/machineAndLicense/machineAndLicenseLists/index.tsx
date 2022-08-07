import { useState } from 'react';
import styled from 'styled-components';
import { Card } from '../../../../shared/parts/card/card';
import { Header } from '../../../../shared/layout/header';
import { Lists } from './components/lists';

export const MachineAndLicenseListsPage = () => {
  const [tabIndex, setTabIndex] = useState<number>(0);
  const handleToggleTabIndex = (index: number) => {
    setTabIndex(index);
  };
  return (
    <>
      <Header></Header>
      <Container>
        <Lists handleToggleTabIndex={handleToggleTabIndex}></Lists>
        <CardContainer>
          {tabIndex === 0 ? (
            <Card text="新規登録" path="/machine-license/machine/create"></Card>
          ) : (
            <Card text="新規登録" path="/machine-license/license/create"></Card>
          )}
        </CardContainer>
      </Container>
    </>
  );
};

const CardContainer = styled.div`
  margin-top: 30px;
  width: 250px;
  height: 50px;
`;

const Container = styled.div`
  max-width: 85%;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
