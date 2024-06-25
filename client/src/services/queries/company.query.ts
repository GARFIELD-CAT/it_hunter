import { useQuery } from "@tanstack/react-query";
import { GetCompanyProps, ICompany, ISector } from "@/types/company";
import {
  getCompany,
  getCompanyByToken,
  getCompanyEmployees,
  getCompanyLocations,
  getCompanySectors,
} from "../api/company.service";

export const useCompanyQuery = (params: GetCompanyProps) =>
  useQuery<ICompany>(["getCompany", params], async () => {
    const res = await getCompany(params);
    return res;
  });

export const useCompanySectorsQuery = () =>
  useQuery<ISector[]>(["getCompanySector"], async () => {
    const res = await getCompanySectors();
    return res;
  });

export const useCompanyLocationsQuery = () =>
  useQuery<ISector[]>(["getCompanyLocations"], async () => {
    const res = await getCompanyLocations();
    return res;
  });

export const useCompanyEmployeesQuery = () =>
  useQuery<ISector[]>(["getCompanyEmployees"], async () => {
    const res = await getCompanyEmployees();
    return res;
  });

export const useCompanyByTokenQuery = () =>
  useQuery<ICompany>(["getCompanyByToken"], async () => {
    const res = await getCompanyByToken();
    return res;
  });
