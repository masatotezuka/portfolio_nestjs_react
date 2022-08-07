import { Route, Routes } from 'react-router-dom';
import { RegisterEmployeePage } from './components/pages/admin/initSetting/registerEmployee';
import { HomePage } from './components/pages/admin//home';
import { LoginPage } from './components/pages/admin/login';
import { LicensePage } from './components/pages/admin/machineAndLicense/license';
import { MachinePage } from './components/pages/admin/machineAndLicense/machine';
import { MachineAndLicenseListsPage } from './components/pages/admin/machineAndLicense/machineAndLicenseLists';
import { ConfirmResetPasswordPage } from './components/pages/common/confirmResetPassword';
import { RequestResetPasswordPage } from './components/pages/common/RequestResetPassword';
import { RegisterOrganizationPage } from './components/pages/admin/initSetting/registerOrganization';
import { EmployeePage } from './components/pages/admin/employee';
import { MailSettingPage } from './components/pages/admin/mail/mailSetting';
import { MailSettingConfirm } from './components/pages/admin/mail/mailSettingConfirm';
import { EmployeeStatus } from './components/pages/admin/employeeStatus';
import { UserLoginPage } from './components/pages/user/userLogin';
import { UserRegisterPasswordPage } from './components/pages/user/userRegisterPassword';
import { UserCheckStatusPage } from './components/pages/user/userCheckStatus';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}></Route>
      <Route
        path="/register-organization"
        element={<RegisterOrganizationPage />}
      ></Route>
      <Route
        path="/register-employee"
        element={<RegisterEmployeePage />}
      ></Route>
      <Route path="/home" element={<HomePage />}></Route>
      <Route path="reset-password">
        <Route path="request" element={<RequestResetPasswordPage />}></Route>
        <Route path="confirm" element={<ConfirmResetPasswordPage />}></Route>
      </Route>
      <Route path="machine-license">
        <Route path="list" element={<MachineAndLicenseListsPage />}></Route>
        <Route path="machine/create" element={<MachinePage />}></Route>
        <Route path="machine/edit" element={<MachinePage />}></Route>
        <Route path="license/create" element={<LicensePage />}></Route>
        <Route path="license/edit" element={<LicensePage />}></Route>
      </Route>
      <Route path="employee" element={<EmployeePage />}></Route>
      <Route path="mail">
        <Route path="setting" element={<MailSettingPage />}></Route>
        <Route path="confirm" element={<MailSettingConfirm />}></Route>
      </Route>
      <Route path="status" element={<EmployeeStatus />}></Route>
      <Route path="user">
        <Route path="login" element={<UserLoginPage />}></Route>
        <Route
          path="register-password"
          element={<UserRegisterPasswordPage />}
        ></Route>
        <Route path="check-status" element={<UserCheckStatusPage />}></Route>
      </Route>
    </Routes>
  );
};
