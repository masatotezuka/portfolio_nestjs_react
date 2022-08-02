import React from 'react';
import { EmployeeList } from '../../../common/components/employeeList';
import { Header } from '../../parts/header';

export const EmployeePage = () => {
  return (
    <>
      <Header></Header>
      <EmployeeList></EmployeeList>
    </>
  );
};
