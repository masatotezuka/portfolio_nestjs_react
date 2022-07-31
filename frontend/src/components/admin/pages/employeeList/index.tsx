import { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../../../common/parts/button/button';
import { Header } from '../../parts/header';
import { Link } from 'react-router-dom';
import { Modal } from './components';

export const EmployeeListPage = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const users = [
    { firstName: '田中', lastName: '太郎', email: 'test@gmail.com' },
    { firstName: '田中', lastName: '太郎', email: 'test@gmail.com' },
  ];
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  //TODO:フォーム送信関数作成
  const handleSubmitEmployee = () => {
    console.log('Employee Information');
  };
  return (
    <>
      <Header></Header>
      <Container>
        <ButtonWrapper>
          <ButtonContainer>
            <Button
              text="社員登録"
              onClick={() => {
                handleOpenModal();
              }}
            ></Button>
          </ButtonContainer>
        </ButtonWrapper>
        <TableContainer>
          <EmployeeTable>
            <thead>
              <tr>
                <th>社員名</th>
                <th>メールアドレス</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return (
                  <tr>
                    <td>
                      {user.firstName}
                      {user.lastName}
                    </td>
                    <td>{user.email}</td>
                  </tr>
                );
              })}
            </tbody>
          </EmployeeTable>
        </TableContainer>
        <TextContainer>
          <TextLink to="/home">次へ</TextLink>
        </TextContainer>
      </Container>
      <Modal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        handleSubmitEmployee={handleSubmitEmployee}
      ></Modal>
    </>
  );
};

const Container = styled.div`
  max-width: 600px;
  margin: 0px auto;
`;

const ButtonWrapper = styled.div`
  padding: 50px 0px;
  display: flex;
  justify-content: center;
`;
const ButtonContainer = styled.div`
  width: 50%;
  height: 50px;
`;

const TableContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const EmployeeTable = styled.table`
  width: 80%;
  border-collapse: collapse;
  thead {
    tr {
      border-bottom: solid 1px;
      th {
        padding: 7px 0px;
      }
    }
  }
  tbody {
    text-align: center;
    tr {
      td {
        padding: 7px 0px;
      }
    }
  }
`;

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
