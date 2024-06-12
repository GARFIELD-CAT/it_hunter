import { useQuery } from "@tanstack/react-query";
import type {
  GetVacancyProps,
  IVacancy,
} from "@/types/vacancy";
import { getVacancy } from "../api/vacancy.service";

export const useVacancyQuery = (params: GetVacancyProps) =>
  useQuery<IVacancy>(
    ["getVacancy", params],
    async () => {
      const res = await getVacancy(params);
      return res;
    },
);
 