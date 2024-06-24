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

export const CreateCompany = () => {
  const navigate = useNavigate();

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
    <form
      className="m-auto w-[30rem] p-6 bg-white rounded-[1.5rem] flex flex-col"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-neutral-950 text-4xl font-medium leading-[2.4375rem]">
        Создание компании
      </h2>
      <div className="mt-6 flex flex-col gap-4 w-full">
        <Input
          errors={errors}
          placeholder="Название компании"
          id="name"
          register={register}
          name="name"
        />
        <Input
          errors={errors}
          placeholder="Краткое описание"
          id="snippet"
          register={register}
          name="snippet"
        />
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
        <Input
          errors={errors}
          placeholder="Описание"
          id="description"
          register={register}
          name="description"
        />
      </div>
      <Button text="Создать" type="submit" className="w-full mt-10" />
    </form>
  );
};
