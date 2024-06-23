import { useInfiniteQuery } from "@tanstack/react-query";
import { GetCompaniesProps, GetCompaniesResponse } from "@/types/company";
import { getCompanies } from "../api/companies.service";

export const useCompaniesQuery = (params: GetCompaniesProps) =>
  useInfiniteQuery<GetCompaniesResponse>(
    ["getCompanies", { params }],
    async ({ pageParam = 1 }) => {
      const res = await getCompanies({
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
