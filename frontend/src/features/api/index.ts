import axios from 'axios';
import { Login, Admin, RequestPasswordReset, VerifyPassword } from '../types';

axios.defaults.withCredentials = true;

export const login = async (data: Login) => {
  const response = await axios.post(`http://localhost:8000/auth/login`, data);
  return response.data.accessToken;
};

export const signUp = async (data: Admin) => {
  const response = await axios.post(`http://localhost:8000/users/admin`, data);
  return response.data.accessToken;
};

export const requestPasswordReset = async (data: RequestPasswordReset) => {
  return await axios.put(
    `http://localhost:8000/users/password-reset/request`,
    data,
  );
};

export const verifyPassword = async (data: VerifyPassword) => {
  return await axios.patch(
    `http://localhost:8000/users/password-reset/verification`,
    data,
  );
};
