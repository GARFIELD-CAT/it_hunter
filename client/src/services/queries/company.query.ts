import { useQuery } from "@tanstack/react-query";
import { GetCompanyProps, ICompany } from "@/types/company";
import { getCompany } from "../api/company.service";

export const useCompanyQuery = (params: GetCompanyProps) =>
  useQuery<ICompany>(
    ["getCompany", params],
    async () => {
      const res = await getCompany(params);
      return res;
    },
);
 