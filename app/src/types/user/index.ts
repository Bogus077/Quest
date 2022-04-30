export type User = {
  id: number;
  name: string;
  lastName: string;
  phone: string;
  accessToken: string;
};

export type SignUpRequest = {
  name: string;
  lastName: string;
  phone: string;
  password: string;
};

export type LogInRequest = {
  phone: string;
  password: string;
};
