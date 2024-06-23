import { api } from '@/lib/api';
import { GetCompanyProps, ICompany } from '@/types/company';

export const getCompany = async (
  params: GetCompanyProps
): Promise<ICompany> => {
  const { data } = await api.get<ICompany>(
    `companies/${params.id}`
  );
  return data;
};
