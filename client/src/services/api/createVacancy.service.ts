import { api } from "@/lib/api";
import { ICreateVacancyBody } from "@/types/vacancy";

export const createVacancy = async (body: ICreateVacancyBody) => {
  const { data } = await api.post(`vacancies/`, body);
  return data;
};
