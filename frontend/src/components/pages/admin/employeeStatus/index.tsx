import React, { useState } from 'react';
import styled from 'styled-components';
import { Header } from '../../../shared/layout/header';
import { Button } from '../../../shared/parts/button/button';
import { ConfirmModal } from '../../../shared/layout/confirmModal';
import { format } from 'date-fns';
import { ReasonForApprovalForm } from './components/reasonForApprovalForm';

export const EmployeeStatus = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const employees = [
    {
      id: 1,
      firstName: '田中',
      lastName: '太郎',
      answeredAt: format(new Date(), 'yyyy-MM-dd'),
    },
    { id: 2, firstName: '山田', lastName: '二朗', answeredAt: undefined },
  ];

  const handleOpenModal = () => {
    // TODO:未回答者チェック
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleConfirmModal = () => {
    console.log('confirm');
  };
  return (
    <>
      <Header></Header>
      <Container>
        <TableContainer>
          <EmployeeTable>
            <thead>
              <tr>
                <th>社員名</th>
                <th>更新状況</th>
                <th>回答日</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => {
                return (
                  <tr key={employee.id}>
                    <td>
                      {employee.firstName}
                      {employee.lastName}
                    </td>
                    <td> {employee.answeredAt ? '更新済み' : '未更新'}</td>
                    <td>{employee.answeredAt ? employee.answeredAt : ''}</td>
                  </tr>
                );
              })}
            </tbody>
          </EmployeeTable>
        </TableContainer>
        <ButtonWrapper>
          <ButtonContainer>
            <Button
              text="承認"
              onClick={() => {
                handleOpenModal();
              }}
            ></Button>
          </ButtonContainer>
        </ButtonWrapper>
      </Container>
      {/* 未回答者なし */}
      <ConfirmModal
        title="更新を承認しますか？"
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        handleConfirm={handleConfirmModal}
      ></ConfirmModal>
      {/* 未回答者あり */}
      <ConfirmModal
        title="未回答者がいますが、更新を承認しますか？"
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        handleConfirm={handleConfirmModal}
      ></ConfirmModal>
      <ReasonForApprovalForm showModal={showModal}></ReasonForApprovalForm>
    </>
  );
};

const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
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
