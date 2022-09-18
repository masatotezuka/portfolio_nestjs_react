export type Login = {
  email: string;
  password: string;
};

export type Admin = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  organizationName: string;
};

export type RequestPasswordReset = {
  email: string;
};

export type VerifyPassword = {
  newPassword: string;
  confirmPassword: string;
  token?: string;
};

export type Machine = {
  id: number;
  symbol: string;
  category: string;
  name: string;
  purchasedAt?: string;
  updatedAt: string;
  user?: Employee;
  usageStatus: string;
};

export type Employee = {
  id: number;
  firstName: string;
  lastName: string;
  email?: string;
};

export type CreateMachine = {
  id?: number;
  symbol: string;
  category: string;
  name: string;
  purchasedAt: Date | string;
  userId?: number;
  usageStatus: string;
};
