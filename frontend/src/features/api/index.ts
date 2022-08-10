import axios from 'axios';
axios.defaults.withCredentials = true;

type Login = {
  email: string;
  password: string;
};

export const login = async (data: Login) => {
  return await axios.post(`http://localhost:8000/auth/login`, data);
};
