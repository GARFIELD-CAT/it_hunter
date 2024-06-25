import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import Button from "@/components/Button";
import Input from "@/components/Input";
import {
  useCompanySectorsQuery,
  useCompanyLocationsQuery,
  useCompanyEmployeesQuery,
} from "@/services/queries/company.query";
import { createCompanySchema } from "@/lib/validation";
import { ICreateCompanyValidationBody } from "@/types/company";
import MultiSelect from "./modules/MultiSelect";
import { useCreateCompanyQuery } from "@/services/queries/createCompany.query";
import { useEffect } from "react";
import { Container } from "@/components/Container";
import useAuthStore from "@/store/useAuthStore";

export const MyCompany = () => {
  const navigate = useNavigate();

  const { isAuthenticated } = useAuthStore();

  const { data: sectors } = useCompanySectorsQuery();
  const { data: locations } = useCompanyLocationsQuery();
  const { data: employees } = useCompanyEmployeesQuery();

  const {
    mutateAsync: createCompany,
    isError,
    error,
  } = useCreateCompanyQuery();

  const {
    control,
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<ICreateCompanyValidationBody>({
    resolver: yupResolver(createCompanySchema),
  });

  useEffect(() => {
    if (isError && error?.response?.data) {
      const nameError = error.response?.data?.name;
      const alreadyExistError = error.response?.data["errors:"];
      if (nameError) {
        setError("name", {
          type: "server",
          message: nameError?.join(", "),
        });
      }
      if (alreadyExistError) {
        setError("description", {
          type: "server",
          message: alreadyExistError,
        });
      }
    }
  }, [isError]);

  useEffect(() => {
    if (!isAuthenticated) navigate("/");
  }, [isAuthenticated]);

  const onSubmit: SubmitHandler<ICreateCompanyValidationBody> = async (
    data
  ) => {
    try {
      const {
        name,
        description,
        snippet,
        locations,
        sector,
        employees_number,
      } = data;

      const requestData = {
        name,
        description,
        snippet,
        locations: locations.map((el) => +el.id),
        sector: sector.map((el) => +el.id),
        employees_number: +employees_number[0]?.id,
      };

      const response = await createCompany(requestData);

      if (response.id) {
        navigate(`/companies/`);
      }
    } catch (error) {
      toast.error(error as string, {
        theme: "colored",
      });
    }
  };

  return (
    <Container className="w-full m-auto mt-10 !px-12">
      <div className="flex gap-4 items-center">
        <button>
          <h2 className="text-neutral-950 text-4xl font-medium leading-[2.4375rem]">
            Страница компании
          </h2>
        </button>
      </div>
      <form
        className="mt-8 w-full p-6 bg-white rounded-[1.5rem] flex flex-col"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mt-6 flex flex-col gap-4 w-full">
          <Input
            errors={errors}
            placeholder="Название компании"
            id="name"
            register={register}
            name="name"
            className="border-0 text-4xl focus:outline-none"
          />
          <Input
            errors={errors}
            placeholder="Питч компании, в одно предложение. Ну или в два"
            id="snippet"
            register={register}
            name="snippet"
            className="border-0 mt-4 text-lg focus:outline-none"
          />

          <div className="mt-10 inline-flex w-auto flex-col gap-4">
            <MultiSelect
              errors={errors}
              placeholder="Секторы"
              id="sector"
              register={register}
              name="sector"
              options={sectors || []}
              control={control}
            />
            <MultiSelect
              errors={errors}
              placeholder="Локации"
              id="locations"
              register={register}
              name="locations"
              options={locations || []}
              control={control}
            />
            <MultiSelect
              errors={errors}
              placeholder="Сотрудники"
              id="employees_number"
              register={register}
              name="employees_number"
              options={employees || []}
              isMultiple={false}
              control={control}
            />
          </div>

          <textarea
            placeholder="Описание"
            id="description"
            {...register("description")}
            className="text-lg mt-4 p-4 border rounded-md min-h-40"
          />
        </div>
        <Button text="Сохранить" type="submit" className="w-full h-16 mt-10" />
      </form>
    </Container>
  );
};
