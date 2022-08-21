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
  id?: number;
  category: string;
  name: string;
  purchasedAt?: Date | string;
  user: User;
  usageStatus: string;
};

export type User = {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
};

export type CreateMachine = {
  id?: number;
  category: string;
  name: string;
  purchasedAt: Date | string;
  userId?: number;
  usageStatus: string;
};
