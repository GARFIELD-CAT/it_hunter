import { api } from "@/lib/api";
import { createQueryString } from "@/lib/helper";
import {
  type GetVacanciesResponse,
  type GetVacanciesProps,
} from "@/types/vacancy";

export const getVacancies = async (
  params: GetVacanciesProps
): Promise<GetVacanciesResponse> => {
  const { data } = await api.get<GetVacanciesResponse>(
    `vacancies?${createQueryString(params)}`
  );
  return data;
};
