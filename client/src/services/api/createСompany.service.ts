import { api } from "@/lib/api";
import { ICreateCompanyBody } from "@/types/company";

export const createCompany = async (body: ICreateCompanyBody) => {
  const { data } = await api.post(`companies/`, body);
  return data;
};
