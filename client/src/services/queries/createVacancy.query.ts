import {
  ICreateCompanyErrorsFull
} from "@/types/company";
import { ICreateVacancyBody } from "@/types/vacancy";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { createVacancy } from "../api/createVacancy.service";

export const useCreateVacancyQuery = () =>
  useMutation<any, AxiosError<ICreateCompanyErrorsFull>, ICreateVacancyBody>(
    ["createCompany"],
    async (body) => {
      const res = await createVacancy(body);
      return res;
    }
  );
