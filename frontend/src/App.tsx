import { Route, Routes } from 'react-router-dom';
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
    </Routes>
  );
};
