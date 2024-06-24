import { useMutation } from "@tanstack/react-query";
import { type ILoginBody } from "@/types/auth";
import { login } from "../api/auth.service";

export const useLoginQuery = () =>
  useMutation(["login"], async (body: ILoginBody) => {
    const res = await login(body);
    return res;
  });
