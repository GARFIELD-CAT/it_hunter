import { api } from "@/lib/api";
import { IToken, type ILoginBody } from "@/types/auth";

export const login = async (body: ILoginBody) => {
  const { data } = await api.post<IToken>("auth/token/login/", body);
  return data;
};
