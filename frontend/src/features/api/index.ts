import axios from 'axios';
import { Login, Admin } from '../types';

axios.defaults.withCredentials = true;

export const login = async (data: Login) => {
  const response = await axios.post(`http://localhost:8000/auth/login`, data);
  return response.data.accessToken;
};

export const createAdmin = async (data: Admin) => {
  const response = await axios.post(
    `http://localhost:8000/user/create/admin`,
    data,
  );
  return response.data.accessToken;
};
