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

export type RequestResetPassword = {
  email: string;
};
