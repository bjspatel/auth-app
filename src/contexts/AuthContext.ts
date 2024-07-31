import { createContext, useContext } from "react";
import { LoginRequestDto, UserDto } from "../api/types";

const AuthContext = createContext({
  user: null as UserDto | null,
  isAuthenticated: false,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  login: async (_: LoginRequestDto): Promise<void> => {},
  logout: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
