import { api } from '@/lib/api';
import type {
    IVacancy,
    GetVacancyProps,
} from '@/types/vacancy';

export const getVacancy = async (
  params: GetVacancyProps
): Promise<IVacancy> => {
  const { data } = await api.get<IVacancy>(
    `vacancies/${params.id}`
  );
  return data;
};
