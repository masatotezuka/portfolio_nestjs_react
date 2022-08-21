import axios from 'axios';
import {
  Login,
  Admin,
  RequestPasswordReset,
  VerifyPassword,
  CreateMachine,
  Machine,
} from '../types';

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

export const verifyAccessToken = async (token: string) => {
  try {
    const response = await axios.get(
      'http://localhost:8000/auth/verification',
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.statusText;
  } catch (error) {
    return error;
  }
};

export const createAdminMachines = async (
  data: CreateMachine,
): Promise<Machine> => {
  const response = await axios.post(`http://localhost:8000/machines`, data);
  return response.data;
};
