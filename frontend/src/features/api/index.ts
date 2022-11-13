import axios from 'axios';
import { BASE_URL } from '../constants/api';
import {
  Login,
  Admin,
  RequestPasswordReset,
  VerifyPassword,
  CreateMachine,
  UpdateMachine,
  Machine,
  Employee,
} from '../types';
import { getAccessTokenFromCookie } from '../utils/getAccessTokenFromCookie';
import { getAdminIdFromCookie } from '../utils/getAdminIdFromCookie';

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

const adminId = getAdminIdFromCookie();
//返り値の型指定をするか
export const login = async (
  data: Login,
): Promise<{ accessToken: string; userId: number }> => {
  const response = await axios.post(`${BASE_URL}/auth/login`, data);
  return response.data;
};

export const signUp = async (data: Admin) => {
  const response = await axios.post(`${BASE_URL}/users/admin`, data);
  return response.data;
};

export const requestPasswordReset = async (data: RequestPasswordReset) => {
  return await axios.put(`${BASE_URL}/users/password-reset/request`, data);
};

export const verifyPassword = async (data: VerifyPassword) => {
  return await axios.patch(
    `${BASE_URL}/users/password-reset/verification`,
    data,
  );
};

export const verifyAccessToken = async () => {
  const response = await axios.get(`${BASE_URL}/auth/verification`);
  return response.statusText;
};

//Machine
export const fetchAdminMachinesByUserId = async (): Promise<Machine[]> => {
  const response = await axios.get(`${BASE_URL}/machines/${adminId}`);
  return response.data;
};

export const createAdminMachine = async (
  data: CreateMachine,
): Promise<Machine> => {
  const response = await axios.post(`${BASE_URL}/machines/${adminId}`, data);
  return response.data;
};

export const updateAdminMachine = async (
  data: UpdateMachine,
): Promise<Machine> => {
  console.log(data);

  const response = await axios.patch(`${BASE_URL}/machines/${adminId}`, data);
  return response.data;
};

//Employee
export const fetchEmployeesAdmin = async () => {
  const response = await axios.get(`${BASE_URL}/users`);
  return response.data;
};

export const createEmployeeAdmin = async (data: Employee) => {
  try {
    const response = await axios.post(`${BASE_URL}/users`, data);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const deleteEmployeeAdmin = async (userId: number) => {
  const response = await axios.delete(`${BASE_URL}/users/${userId}`);
  return response.data;
};

export const updateEmployeeAdmin = async (data: Employee) => {
  const response = await axios.patch(`${BASE_URL}/users`, data);
  return response.data;
};
