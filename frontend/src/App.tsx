import { Route, Routes } from 'react-router-dom';
import { EmployeeListPage } from './components/admin/pages/employeeList';
import { LoginPage } from './components/admin/pages/login';
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
    </Routes>
  );
};
