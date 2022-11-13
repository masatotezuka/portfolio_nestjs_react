export type Login = {
  email: string;
  password: string;
};

export type Admin = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  adminName: string;
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
  purchasedAt?: Date;
  updatedAt: Date;
  userMachines?: UserMachine;
  usageStatus: string;
};

export type MachineData = {
  id: number;
  symbol: string;
  category: string;
  name: string;
  purchasedAt?: string;
  updatedAt: string;
  userName:string;
  usageStatus: string;
};
type UserMachine = {
  id: number;
  machineId: number;
  user: User;
};
type User = {
  id: number;
  firstName: string;
  lastName: string;
  email?: string;
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
  purchasedAt: Date;
  userId?: number;
  usageStatus: string;
};

export type UpdateMachine = {
  id: number;
  symbol: string;
  category: string;
  name: string;
  purchasedAt: Date;
  userId?: number;
  usageStatus: string;
};
