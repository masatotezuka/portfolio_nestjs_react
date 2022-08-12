import axios from 'axios';
import { Login, Admin, RequestPasswordReset } from '../types';

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

export const requestPasswordReset = async (data: RequestPasswordReset) => {
  await axios.post(`http://localhost:8000/user/password-reset/request`, data);
  return;
};
