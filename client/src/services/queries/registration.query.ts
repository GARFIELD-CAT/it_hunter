import { useMutation } from "@tanstack/react-query";
import type {
  IRegistrationBody,
  IRegistrationResponse,
  IRegistrationValidationErrors,
} from "@/types/auth";
import { registration } from "../api/registration.service";
import { AxiosError } from "axios";

export const useRegistrationQuery = () =>
  useMutation<
    IRegistrationResponse,
    AxiosError<IRegistrationValidationErrors>,
    IRegistrationBody
  >(["registration"], async (body) => {
    const res = await registration(body);
    return res;
  });
