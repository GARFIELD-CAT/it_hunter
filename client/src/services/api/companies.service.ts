import { api } from "@/lib/api";
import { GetCompaniesProps, GetCompaniesResponse } from "@/types/company";

export const getCompanies = async (
  params: GetCompaniesProps
): Promise<GetCompaniesResponse> => {
  const { search, page } = params;

  const { data } = await api.get<GetCompaniesResponse>(
    `companies?page=${page}`
  );
  return data;
};
