import axios from 'axios';
import { Login, Admin, RequestPasswordReset, VerifyPassword } from '../types';

axios.defaults.withCredentials = true;

export const login = async (data: Login) => {
  const response = await axios.post(`http://localhost:8000/auth/login`, data);
  return response.data.accessToken;
};

export const signUp = async (data: Admin) => {
  const response = await axios.post(
    `http://localhost:8000/user/create/admin`,
    data,
  );
  return response.data.accessToken;
};

//TODO:PUTにする
export const requestPasswordReset = async (data: RequestPasswordReset) => {
  await axios.post(`http://localhost:8000/user/password-reset/request`, data);
  return;
};

export const verifyPassword = async (data: VerifyPassword) => {
  await axios.patch(
    `http://localhost:8000/user/password-reset/verification`,
    data,
  );
};
