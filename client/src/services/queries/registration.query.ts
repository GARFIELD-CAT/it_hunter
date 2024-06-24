import { useMutation } from "@tanstack/react-query";
import type {
  IRegistrationBody,
  IRegistrationResponse,
  IValidationErrors,
} from "@/types/auth";
import { registration } from "../api/registration.service";
import { AxiosError } from "axios";

export const useRegistrationQuery = () =>
  useMutation<
    IRegistrationResponse,
    AxiosError<IValidationErrors>,
    IRegistrationBody
  >(["registration"], async (body: IRegistrationBody) => {
    const res = await registration(body);
    return res;
  });
