import { useEffect } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { registrationSchema } from "@/lib/validation";
import useAuthStore from "@/store/useAuthStore";
import type {
  IRegistrationBodyValidation,
  IRegistrationValidationErrors,
} from "@/types/auth";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { useNavigate } from "react-router";
import { useRegistrationQuery } from "@/services/queries/registration.query";
import { AxiosError } from "axios";
import { login } from "@/services/api/auth.service";

export const RegisterForm = () => {
  const navigate = useNavigate();

  const { setIsAuthenticated } = useAuthStore((state) => state);
  const { mutateAsync: registration, isError, error } = useRegistrationQuery();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IRegistrationBodyValidation>({
    resolver: yupResolver(registrationSchema),
  });

  useEffect(() => {
    if (isError && error?.response?.data) {
      const serverErrors = error.response?.data;
      for (const field in serverErrors) {
        if (serverErrors.hasOwnProperty(field)) {
          const messages =
            serverErrors[field as keyof IRegistrationValidationErrors];
          setError(field as keyof IRegistrationValidationErrors, {
            type: "server",
            message: messages?.join(", "),
          });
        }
      }
    } else if (isError) {
      toast.error(error as unknown as string, { theme: "colored" });
    }
  }, [isError]);

  const onSubmit: SubmitHandler<IRegistrationBodyValidation> = async (data) => {
    const { email, first_name, phone, password } = data;
    try {
      const result = await registration({ email, first_name, phone, password });
      if (!!result.id) {
        const token = await login({ email, password });
        localStorage.setItem("token", token.auth_token);
        setIsAuthenticated(true);
        navigate("/");
      }
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
        Регистрация
      </h2>
      <div className="mt-6 flex flex-col gap-4 w-full">
        <Input
          errors={errors}
          placeholder="email"
          id="email"
          register={register}
          name="email"
        />
        <Input
          errors={errors}
          placeholder="Имя"
          id="first_name"
          register={register}
          name="first_name"
        />
        <Input
          errors={errors}
          placeholder="Телефон"
          id="phone"
          register={register}
          name="phone"
        />
        <Input
          errors={errors}
          placeholder="Пароль"
          type="password"
          register={register}
          name="password"
        />
        <Input
          errors={errors}
          placeholder="Повторите пароль"
          type="password"
          register={register}
          name="password2"
        />
      </div>
      <Button
        text="Зарегистрироваться"
        type="submit"
        className="w-full mt-10"
      />
    </form>
  );
};
