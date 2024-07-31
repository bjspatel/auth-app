export type RegisterRequestDto = {
  email: string;
  name: string;
  password: string;
};

export type LoginRequestDto = {
  email: string;
  password: string;
};

export type TokenDto = {
  user: UserDto;
  accessToken: string;
};

export type UserDto = {
  id: string;
  email: string;
  name: string;
  country?: string;
  phone?: string;
};

export type UpdateUserProfile = {
  name: string;
  email: string;
  country: string;
  phone: string;
};
