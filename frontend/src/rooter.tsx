import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { RegisterEmployeePage } from './components/pages/admin/initSetting/registerEmployee';
import { HomePage } from './components/pages/admin//home';
import { LicensePage } from './components/pages/admin/machineAndLicense/license';
import { MachinePage } from './components/pages/admin/machineAndLicense/machine';
import { MachineAndLicenseListsPage } from './components/pages/admin/machineAndLicense/machineAndLicenseLists';
import { RegisterOrganizationPage } from './components/pages/admin/initSetting/registerOrganization';
import { EmployeePage } from './components/pages/admin/employee';
import { MailSettingPage } from './components/pages/admin/mail/mailSetting';
import { MailSettingConfirm } from './components/pages/admin/mail/mailSettingConfirm';
import { EmployeeStatus } from './components/pages/admin/employeeStatus';
import { ChangePasswordPage } from './components/pages/admin/changePassword';
import { useAuth } from './hooks/useAuth';

export const AuthRooter = () => {
  const { check } = useAuth();
  if (!check.checked) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {check.isAuthenticated ? (
        <>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="create" element={<RegisterOrganizationPage />}></Route>
            <Route
              path="employee/create"
              element={<RegisterEmployeePage />}
            ></Route>
            <Route path="/machine-license">
              <Route
                path="list"
                element={<MachineAndLicenseListsPage />}
              ></Route>
              <Route path="machine">
                <Route path="create" element={<MachinePage />}></Route>
                <Route path="edit" element={<MachinePage />}></Route>
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
