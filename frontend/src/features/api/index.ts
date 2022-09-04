import axios from 'axios';
import {
  Login,
  Admin,
  RequestPasswordReset,
  VerifyPassword,
  CreateMachine,
  Machine,
  Employee,
} from '../types';
import { getAccessTokenFromCookie } from '../utils/getAccessTokenFromCookie';

axios.defaults.withCredentials = true;
axios.interceptors.request.use((config) => {
  const accessToken = getAccessTokenFromCookie();
  if (config.headers) {
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
  }
  return config;
});

//返り値の型指定をするか
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

export const verifyAccessToken = async () => {
  const response = await axios.get('http://localhost:8000/auth/verification');
  return response.statusText;
};

export const createAdminMachines = async (
  data: CreateMachine,
): Promise<Machine> => {
  const response = await axios.post(`http://localhost:8000/machines`, data);
  return response.data;
};

export const fetchEmployeesAdmin = async () => {
  const response = await axios.get(`http://localhost:8000/users`);
  return response.data;
};

export const createEmployeeAdmin = async (data: Employee) => {
  try {
    const response = await axios.post(`http://localhost:8000/users`, data);
    console.log('success');
    return response.data;
  } catch (error) {
    return error;
  }
};

export const deleteEmployeeAdmin = async (userId: number) => {
  const response = await axios.delete(`http://localhost:8000/users/${userId}`);
  return response.data;
};

export const updateEmployeeAdmin = async (data: Employee) => {
  const response = await axios.patch(`http://localhost:8000/users`, data);
  return response.data;
};