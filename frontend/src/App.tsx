import { Route, Routes } from 'react-router-dom';
import { EmployeeListPage } from './components/admin/pages/employeeList';
import { HomePage } from './components/admin/pages/home';
import { LoginPage } from './components/admin/pages/login';
import { LicensePage } from './components/admin/pages/machineAndLicense/license';
import { MachinePage } from './components/admin/pages/machineAndLicense/machine';
import { MachineAndLicenseListsPage } from './components/admin/pages/machineAndLicense/machineAndLicenseLists';
import { ConfirmResetPasswordPage } from './components/admin/pages/password/confirmResetPassword';
import { RequestResetPasswordPage } from './components/admin/pages/password/RequestResetPassword';
import { RegisterOrganizationPage } from './components/admin/pages/registerOrganization';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}></Route>
      <Route
        path="/register-organization"
        element={<RegisterOrganizationPage />}
      ></Route>
      <Route path="/employee" element={<EmployeeListPage />}></Route>
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
    </Routes>
  );
};
