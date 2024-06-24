import {
  ICreateCompanyBody,
  ICreateCompanyErrorsFull,
  ICreateCompanyResponse,
} from "@/types/company";
import { useMutation } from "@tanstack/react-query";
import { createCompany } from "../api/createСompany.service";
import { AxiosError } from "axios";

export const useCreateCompanyQuery = () =>
  useMutation<
    ICreateCompanyResponse,
    AxiosError<ICreateCompanyErrorsFull>,
    ICreateCompanyBody
  >(["createCompany"], async (body) => {
    const res = await createCompany(body);
    return res;
  });
