import { Route, Routes } from 'react-router-dom';
import { LoginPage } from './components/admin/pages/login';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}></Route>
    </Routes>
  );
};
