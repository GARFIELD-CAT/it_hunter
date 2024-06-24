import { useMutation } from "@tanstack/react-query";
import type { ILoginValidationErrors, IToken, ILoginBody } from "@/types/auth";
import { login } from "../api/auth.service";
import { AxiosError } from "axios";

export const useLoginQuery = () =>
  useMutation<IToken, AxiosError<ILoginValidationErrors>, ILoginBody>(
    ["login"],
    async (body) => {
      const res = await login(body);
      return res;
    }
  );
