import styled from 'styled-components';
import { Header } from '../../../parts/header';
import { LicenseForm } from './components/licenseForm';

export const CreateLicensePage = () => {
  return (
    <>
      <Header></Header>
      <Container>
        <LicenseForm></LicenseForm>
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
