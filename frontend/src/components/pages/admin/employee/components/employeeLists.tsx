import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CreateEmployeeModal } from './createEmployeeModal';
import { ConfirmModal } from '../../../../shared/layout/confirmModal';
import { Button } from '../../../../shared/parts/button/button';
import { EditEmployeeModal } from './editEmployeeModal';
import { User } from '../../../../../features/types';
import { useAppDispatch, useAppSelector } from '../../../../../hooks';
import { fetchUser } from '../../../../../store/userSlice';

export const EmployeeLists = () => {
  const [showCreateEmployeeModal, setShowCreateEmployeeModal] =
    useState<boolean>(false);
  const [showEditEmployeeModal, setShowEditEmployeeModal] =
    useState<boolean>(false);
  const [showDeleteEmployeeModal, setShowDeleteEmployeeModal] =
    useState<boolean>(false);

  const [targetEmployee, setEmployee] = useState<User>({
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
  });
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const users = useAppSelector((state) => state.user.users);

  const handleOpenCreateEmployeeModal = () => {
    setShowCreateEmployeeModal(true);
  };
  const handleCloseCreateEmployeeModal = () => {
    setShowCreateEmployeeModal(false);
  };

  const handleOpenEditEmployeeModal = (id: number) => {
    setShowEditEmployeeModal(true);
    const employee = users.find((employee) => employee.id === id);
    if (employee) {
      setEmployee(employee);
    }
  };

  const handleCloseEditEmployeeModal = () => {
    setShowEditEmployeeModal(false);
  };

  const handleOpenDeleteEmployeeModal = (id: number) => {
    setShowDeleteEmployeeModal(true);
    const employee = users.find((employee) => employee.id === id);
    if (employee) {
      setEmployee(employee);
    }
  };
  const handleCloseDeleteEmployeeModal = () => {
    setShowDeleteEmployeeModal(false);
  };

  //TODO:フォーム送信関数作成
  const handleSubmitEmployee = () => {
    console.log('Employee Information');
  };
  return (
    <>
      <Container>
        <ButtonWrapper>
          <ButtonContainer>
            <Button
              text="社員登録"
              onClick={() => {
                handleOpenCreateEmployeeModal();
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
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map((employee) => {
                return (
                  <tr key={employee.id}>
                    <td>
                      {employee.lastName}
                      {employee.firstName}
                    </td>
                    <td>{employee.email}</td>
                    <td>
                      {
                        <>
                          <ButtonContainerInTable>
                            <Button
                              text="編集"
                              onClick={() => {
                                handleOpenEditEmployeeModal(employee.id);
                              }}
                            ></Button>
                          </ButtonContainerInTable>
                        </>
                      }
                    </td>
                    <td>
                      {
                        <>
                          <ButtonContainerInTable>
                            <Button
                              text="削除"
                              onClick={() => {
                                handleOpenDeleteEmployeeModal(employee.id);
                              }}
                            ></Button>
                          </ButtonContainerInTable>
                        </>
                      }
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </EmployeeTable>
        </TableContainer>
      </Container>
      <CreateEmployeeModal
        showModal={showCreateEmployeeModal}
        handleCloseModal={handleCloseCreateEmployeeModal}
        handleSubmitEmployee={handleSubmitEmployee}
      ></CreateEmployeeModal>
      <EditEmployeeModal
        showModal={showEditEmployeeModal}
        employee={targetEmployee}
        handleCloseModal={handleCloseEditEmployeeModal}
        handleSubmitEmployee={handleSubmitEmployee}
      ></EditEmployeeModal>
      <ConfirmModal
        title="削除しますか？"
        showModal={showDeleteEmployeeModal}
        handleCloseModal={handleCloseDeleteEmployeeModal}
        handleConfirm={handleSubmitEmployee}
      ></ConfirmModal>
    </>
  );
};

const Container = styled.div`
  max-width: 650px;
  margin: 0px auto;
`;

const ButtonWrapper = styled.div`
  padding: 50px 0px;
  display: flex;
  justify-content: center;
`;
const ButtonContainer = styled.div`
  width: 30%;
  height: 50px;
`;

const TableContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonContainerInTable = styled.div`
  margin: 0px auto;
  width: 60px;
  height: 35px;
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
        padding: 12px 0px;
      }
    }
  }
`;
