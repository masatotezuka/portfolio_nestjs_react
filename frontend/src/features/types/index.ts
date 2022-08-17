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
