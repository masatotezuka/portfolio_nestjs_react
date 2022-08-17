import { Route, Routes } from 'react-router-dom';
import { RegisterEmployeePage } from './components/pages/admin/initSetting/registerEmployee';
import { HomePage } from './components/pages/admin//home';
import { LoginPage } from './components/pages/admin/login';
import { LicensePage } from './components/pages/admin/machineAndLicense/license';
import { MachinePage } from './components/pages/admin/machineAndLicense/machine';
import { MachineAndLicenseListsPage } from './components/pages/admin/machineAndLicense/machineAndLicenseLists';
import { RequestResetPasswordPage } from './components/pages/common/requestPasswordReset';
import { RegisterOrganizationPage } from './components/pages/admin/initSetting/registerOrganization';
import { EmployeePage } from './components/pages/admin/employee';
import { MailSettingPage } from './components/pages/admin/mail/mailSetting';
import { MailSettingConfirm } from './components/pages/admin/mail/mailSettingConfirm';
import { EmployeeStatus } from './components/pages/admin/employeeStatus';
import { UserLoginPage } from './components/pages/user/userLogin';
import { UserRegisterPasswordPage } from './components/pages/user/userRegisterPassword';
import { UserCheckStatusPage } from './components/pages/user/userCheckStatus';
import { ChangePasswordPage } from './components/pages/admin/changePassword';
import { NotFoundPage } from './components/shared/layout/notFound';
import { VerificationPasswordPage } from './components/pages/common/verificationPassword/indes';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}></Route>
      <Route path="password-reset">
        <Route path="request" element={<RequestResetPasswordPage />}></Route>
        <Route
          path="verification"
          element={<VerificationPasswordPage />}
        ></Route>
      </Route>
      <Route path="admin">
        <Route path="" element={<HomePage />}></Route>
        <Route path="create" element={<RegisterOrganizationPage />}></Route>
        <Route
          path="employee/create"
          element={<RegisterEmployeePage />}
        ></Route>
        <Route path="machine-license">
          <Route path="list" element={<MachineAndLicenseListsPage />}></Route>
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
        <Route path="password/change" element={<ChangePasswordPage />}></Route>
      </Route>
      <Route path="user">
        <Route path="login" element={<UserLoginPage />}></Route>
        <Route
          path="password/register"
          element={<UserRegisterPasswordPage />}
        ></Route>
        <Route path="status/check" element={<UserCheckStatusPage />}></Route>
      </Route>
      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
  );
};
