import { api } from "@/lib/api";
import { createQueryString } from "@/lib/helper";
import { GetCompaniesProps, GetCompaniesResponse } from "@/types/company";

export const getCompanies = async (
  params: GetCompaniesProps
): Promise<GetCompaniesResponse> => {
  const { data } = await api.get<GetCompaniesResponse>(
    `companies?${createQueryString(params)}`
  );
  return data;
};
