import { useQuery } from "@tanstack/react-query";
import { fetchAllFilters } from "../api/filters.service";
import { IFilterValue } from "@/types/filters";

export const useFiltersQuery = () =>
  useQuery<{
    locations: IFilterValue[];
    tags: IFilterValue[];
    employmentTypes: IFilterValue[];
    schedules: IFilterValue[];
    experiences: IFilterValue[];
    types: IFilterValue[];
  }>(["filters"], async () => {
    const res = await fetchAllFilters();
    return res;
  });
