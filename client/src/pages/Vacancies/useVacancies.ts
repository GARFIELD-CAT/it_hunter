import { useVacanciesQuery } from "@/services/queries/vacancies.query";
import { useVacanciesStore } from "./store";

export const useGlobalVacanciesQuery = () => {
  const { params } = useVacanciesStore();
  return useVacanciesQuery(params);
};
