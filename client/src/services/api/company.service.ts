import { api } from "@/lib/api";
import { GetCompanyProps, ICompany, ISector } from "@/types/company";

export const getCompany = async (
  params: GetCompanyProps
): Promise<ICompany> => {
  const { data } = await api.get<ICompany>(`companies/${params.id}`);
  return data;
};

export const getCompanySectors = async (): Promise<ISector[]> => {
  const { data } = await api.get<ISector[]>(`companies/sectors/`);
  return data;
};

export const getCompanyLocations = async (): Promise<ISector[]> => {
  const { data } = await api.get<ISector[]>(`companies/locations/`);
  return data;
};

export const getCompanyEmployees = async (): Promise<ISector[]> => {
  const { data } = await api.get<ISector[]>(`companies/employees-number/`);
  return data;
};

export const getCompanyByToken = async (): Promise<ICompany> => {
  const { data } = await api.get<ICompany>(`companies/my/`);
  return data;
};
