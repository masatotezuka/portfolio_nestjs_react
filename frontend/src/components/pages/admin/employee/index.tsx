import React from 'react';
import { EmployeeLists } from './components/employeeLists';
import { Header } from '../../../shared/layout/header';

export const EmployeePage = () => {

  return (
    <>
      <Header></Header>
      <EmployeeLists></EmployeeLists>
    </>
  );
};
