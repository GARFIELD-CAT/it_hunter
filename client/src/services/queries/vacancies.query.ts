import { useInfiniteQuery } from "@tanstack/react-query";
import {
  type GetVacanciesResponse,
  type GetVacanciesProps,
} from "@/types/vacancy";
import { getVacancies } from "../api/vacancies.service";

export const useVacanciesQuery = (params: GetVacanciesProps) =>
  useInfiniteQuery<GetVacanciesResponse>(
    ["getVacancies", { params }],
    async ({ pageParam = 1 }) => {
      const res = await getVacancies({
        page: pageParam,
        ...params,
      });
      return res;
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.next ? allPages.length + 1 : undefined;
      },
    }
  );
