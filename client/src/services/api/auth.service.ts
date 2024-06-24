import { api } from "@/lib/api";
import { IToken, type LoginBody } from "@/types/auth";

// Dummy login request that will resolve in 2 seconds
export const login = async (body: LoginBody) => {
  const { data } = await api.post<IToken>("auth/token/login/", body);
  return data;
};
