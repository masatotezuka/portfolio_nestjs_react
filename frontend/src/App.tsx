import { Route, Routes } from 'react-router-dom';
import { EmployeeListPage } from './components/admin/pages/employeeList';
import { HomePage } from './components/admin/pages/home';
import { LoginPage } from './components/admin/pages/login';
import { ResetPasswordPage } from './components/admin/pages/password/resetPassword';
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
      <Route path="/reset-password" element={<ResetPasswordPage />}></Route>
    </Routes>
  );
};
