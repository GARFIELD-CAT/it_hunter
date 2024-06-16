import { api } from '@/lib/api';
import {
  type GetVacanciesResponse,
  type GetVacanciesProps,
} from '@/types/vacancy';

export const getVacancies = async (
  params: GetVacanciesProps
): Promise<GetVacanciesResponse> => {
  const { search, page } = params;
  const { data } = await api.get<GetVacanciesResponse>(
    `vacancies?page=${page}`
  );
  return data;
};
