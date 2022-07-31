import { Route, Routes } from 'react-router-dom';
import { EmployeeListPage } from './components/admin/pages/employeeList';
import { HomePage } from './components/admin/pages/home';
import { LoginPage } from './components/admin/pages/login';
import { CreateMachinePage } from './components/admin/pages/machineAndLicense/createMachine';
import { CreateLicensePage } from './components/admin/pages/machineAndLicense/createLicense';
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
        <Route path="create/machine" element={<CreateMachinePage />}></Route>
        <Route path="create/license" element={<CreateLicensePage />}></Route>
      </Route>
    </Routes>
  );
};
