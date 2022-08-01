import styled from 'styled-components';
import { Header } from '../../../parts/header';
import { Link } from 'react-router-dom';
import { EmployeeList } from '../../../../common/components/employeeList';

export const RegisterEmployeePage = () => {
  return (
    <>
      <Header></Header>
      <EmployeeList></EmployeeList>
      <TextContainer>
        <TextLink to="/home">次へ</TextLink>
      </TextContainer>
    </>
  );
};

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;

const TextLink = styled(Link)`
  font-size: 16px;
  color: blue;
  &:hover {
    opacity: 0.5;
  }
`;
