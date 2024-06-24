import { api } from "@/lib/api";
import type { IToken, IRegistrationBody } from "@/types/auth";

export const registration = async (body: IRegistrationBody) => {
  const { data } = await api.post("users/", body);
  return data;
};
