import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from '../../../parts/header';
import { LicenseForm } from './components/licenseForm';
import { format } from 'date-fns';

export const LicensePage = () => {
  const location = useLocation();

  const initLicense = {
    name: 'ライセンスを入力またはを選択してください',
    purchasedAt: '',
    expiredAt: '',
    user: '利用者を選択してください',
    usageStatus: '現在のステータスを選択してください',
  };
  const license = {
    name: 'MacBook',
    purchasedAt: format(new Date(2022, 3 - 1, 2), 'yyyy-MM-dd'),
    expiredAt: format(new Date(2025, 2 - 1, 2), 'yyyy-MM-dd'),
    user: 'tezuka',
    usageStatus: '使用中',
  };

  return (
    <>
      <Header></Header>
      <Container>
        {location.pathname === '/machine-license/license/create' && (
          <LicenseForm buttonText="登録" license={initLicense}></LicenseForm>
        )}
        {location.pathname === '/machine-license/license/edit' && (
          <LicenseForm buttonText="更新" license={license}></LicenseForm>
        )}
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
