import { useQuery } from '@tanstack/react-query';
import {
  type GetVacanciesResponse,
  type GetVacanciesProps,
} from '@/types/vacancy';
import { getVacancies } from '../api/vacancies.service';

export const useVacanciesQuery = (params: GetVacanciesProps) =>
  useQuery<GetVacanciesResponse>(['getVacancies', { params }], async () => {
    const res = await getVacancies(params);
    return res;
  });
