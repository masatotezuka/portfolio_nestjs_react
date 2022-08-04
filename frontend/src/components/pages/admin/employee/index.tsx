import React from 'react';
import { EmployeeList } from '../../../shared/layout/employeeList';
import { Header } from '../../../shared/layout/header';

export const EmployeePage = () => {
  return (
    <>
      <Header></Header>
      <EmployeeList></EmployeeList>
    </>
  );
};
