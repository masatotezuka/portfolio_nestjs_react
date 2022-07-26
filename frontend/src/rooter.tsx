import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './components/pages/admin//home';
import { LicensePage } from './components/pages/admin/machineAndLicense/license';
import { MachinePage } from './components/pages/admin/machineAndLicense/machine';
import { MachineAndLicenseListsPage } from './components/pages/admin/machineAndLicense/machineAndLicenseLists';
import { EmployeePage } from './components/pages/admin/employee';
import { MailSettingPage } from './components/pages/admin/mail/mailSetting';
import { MailSettingConfirm } from './components/pages/admin/mail/mailSettingConfirm';
import { EmployeeStatus } from './components/pages/admin/employeeStatus';
import { ChangePasswordPage } from './components/pages/admin/changePassword';
import { useAuth } from './hooks/useAuth';
import { useEffect } from 'react';
import { useAppDispatch } from './hooks';
import { fetchMachines } from './store/machineSlice';
import { fetchEmployees } from './store/employeeSlice';

export const AuthRooter = () => {
  const { check } = useAuth();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMachines());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);
  if (!check.checked) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {check.isAuthenticated ? (
        <>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="machine-license">
              <Route
                path="list"
                element={<MachineAndLicenseListsPage />}
              ></Route>
              <Route path="machine">
                <Route path="create" element={<MachinePage />}></Route>
                <Route path="edit/:id" element={<MachinePage />}></Route>
              </Route>
              <Route path="license">
                <Route path="create" element={<LicensePage />}></Route>
                <Route path="edit" element={<LicensePage />}></Route>
              </Route>
            </Route>
            <Route path="employee" element={<EmployeePage />}></Route>
            <Route path="mail">
              <Route path="setting" element={<MailSettingPage />}></Route>
              <Route path="confirm" element={<MailSettingConfirm />}></Route>
            </Route>
            <Route path="status" element={<EmployeeStatus />}></Route>
            <Route
              path="password/change"
              element={<ChangePasswordPage />}
            ></Route>
          </Routes>
        </>
      ) : (
        <>
          <Navigate to="/" />
        </>
      )}
    </>
  );
};

export const NoAuthRouter = ({
  childrenComponent,
}: {
  childrenComponent: React.ReactElement;
}) => {
  const { check } = useAuth();

  if (!check.checked) {
    return <div>loading...</div>;
  }

  if (check.isAuthenticated) {
    return <Navigate to={'/admin'}></Navigate>;
  }

  return <>{childrenComponent}</>;
};
