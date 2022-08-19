import { Route, Routes } from 'react-router-dom';
import { LoginPage } from './components/pages/admin/login';
import { RequestResetPasswordPage } from './components/pages/common/requestPasswordReset';
import { UserLoginPage } from './components/pages/user/userLogin';
import { UserRegisterPasswordPage } from './components/pages/user/userRegisterPassword';
import { UserCheckStatusPage } from './components/pages/user/userCheckStatus';
import { NotFoundPage } from './components/shared/layout/notFound';
import { VerifyPasswordPage } from './components/pages/common/verifyPassword';
import { AuthRooter, NoAuthRouter } from './rooter';

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <NoAuthRouter childrenComponent={<LoginPage />}></NoAuthRouter>
        }
      ></Route>
      <Route path="password-reset">
        <Route
          path="request"
          element={
            <NoAuthRouter
              childrenComponent={<RequestResetPasswordPage />}
            ></NoAuthRouter>
          }
        ></Route>
        <Route
          path="verification/:token"
          element={
            <NoAuthRouter
              childrenComponent={<VerifyPasswordPage />}
            ></NoAuthRouter>
          }
        ></Route>
      </Route>
      <Route path="admin/*" element={<AuthRooter />}></Route>
      {/* TODO: ユーザー側のコンポーネントでもAuthRooterをラップする */}
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
