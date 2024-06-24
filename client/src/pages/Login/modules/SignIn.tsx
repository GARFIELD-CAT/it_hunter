import { useEffect } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/lib/validation";
import { useLoginQuery } from "@/services/queries/auth.query";
import useAuthStore from "@/store/useAuthStore";
import { type ILoginBody } from "@/types/auth";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { useNavigate } from "react-router";

export const SignInForm = () => {
  const navigate = useNavigate();

  const { setIsAuthenticated } = useAuthStore((state) => state);
  const { mutateAsync: login, isError, error } = useLoginQuery();
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginBody>({ resolver: yupResolver(loginSchema) });

  useEffect(() => {
    if (isError && error?.response?.data) {
      const serverError = error.response?.data?.non_field_errors;
      setError("password", {
        type: "server",
        message: serverError?.join(", "),
      });
    } else if (isError) {
      toast.error(error as unknown as string, { theme: "colored" });
    }
  }, [isError]);

  const onSubmit: SubmitHandler<ILoginBody> = async (data) => {
    try {
      const token = await login(data);
      localStorage.setItem("token", token.auth_token);
      setIsAuthenticated(true);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className="m-auto w-[30rem] p-6 bg-white rounded-[1.5rem] flex flex-col"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-neutral-950 text-4xl font-medium leading-[2.4375rem]">
        Вход
      </h2>
      <div className="mt-6 flex flex-col gap-4 w-full">
        <Input
          errors={errors}
          placeholder="E-mail"
          id="email"
          register={register}
          name="email"
        />
        <Input
          errors={errors}
          placeholder="Password"
          type="password"
          register={register}
          name="password"
        />
      </div>
      <Button text="Войти" type="submit" className="w-full mt-10" />
    </form>
  );
};
