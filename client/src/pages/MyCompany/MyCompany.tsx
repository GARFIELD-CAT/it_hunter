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
  useCompanyByTokenQuery,
} from "@/services/queries/company.query";
import { createCompanySchema } from "@/lib/validation";
import { ICreateCompanyValidationBody } from "@/types/company";
import MultiSelect from "./modules/MultiSelect";
import { useCreateCompanyQuery } from "@/services/queries/createCompany.query";
import { useEffect } from "react";
import { Container } from "@/components/Container";
import useAuthStore from "@/store/useAuthStore";
import { getLinkType } from "@/lib/helper";
import { Footer } from "@/components/Footer";

export const MyCompany = () => {
  const navigate = useNavigate();

  const { isAuthenticated } = useAuthStore();

  const { data: sectors } = useCompanySectorsQuery();
  const { data: locations } = useCompanyLocationsQuery();
  const { data: employees } = useCompanyEmployeesQuery();

  const { data: companyData, isError: myCompanyError } =
    useCompanyByTokenQuery();

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
    <div className="flex flex-1 flex-col justify-between items-start w-full">
      <Container className="flex mb-11 flex-col self-stretch w-full m-auto mt-10 !px-12">
        <div className="flex flex-col mt-8 items-start w-auto max-w-[1184px]">
          <div className="flex flex-col items-start gap-12 self-stretch">
            <div className="header-block bg-white rounded-3xl py-2 px-6 flex shrink items-center h-16 w-full">
              <button
                // go back
                onClick={() => navigate(-1)}
                className="flex flex-col items-start p-2 justify-center"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28 16C28 16.2708 27.901 16.5052 27.7031 16.7031C27.5052 16.901 27.2708 17 27 17H7.40625L14.7188 24.2812C14.8021 24.3854 14.8698 24.4948 14.9219 24.6094C14.974 24.724 15 24.8542 15 25C15 25.2708 14.901 25.5052 14.7031 25.7031C14.5052 25.901 14.2708 26 14 26C13.8542 26 13.724 25.974 13.6094 25.9219C13.4948 25.8698 13.3854 25.8021 13.2812 25.7188L4.28125 16.7188C4.19792 16.6146 4.13021 16.5052 4.07812 16.3906C4.02604 16.276 4 16.1458 4 16C4 15.8542 4.02604 15.724 4.07812 15.6094C4.13021 15.4948 4.19792 15.3854 4.28125 15.2812L13.2812 6.28125C13.3854 6.19792 13.4948 6.13021 13.6094 6.07812C13.724 6.02604 13.8542 6 14 6C14.2708 6 14.5052 6.09896 14.7031 6.29688C14.901 6.49479 15 6.72917 15 7C15 7.14583 14.974 7.27604 14.9219 7.39062C14.8698 7.50521 14.8021 7.61458 14.7188 7.71875L7.40625 15H27C27.2708 15 27.5052 15.099 27.7031 15.2969C27.901 15.4948 28 15.7292 28 16Z"
                    fill="#0A0A0A"
                  />
                </svg>
              </button>
              <div className="w-px h-10 bg-gray-300" />
              <div className="flex flex-col items-start pl-6">
                <div className="bg-neutral-200 text-sm leading-[14px] py-1 px-2 rounded">
                  Страница компании
                </div>
              </div>
            </div>

            {!companyData && (
              <form
                className="w-full p-6 bg-white rounded-[1.5rem] flex flex-col"
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
                <Button
                  text="Сохранить"
                  type="submit"
                  className="h-16 w-40 mt-10"
                />
              </form>
            )}

            {companyData && (
              <div className="flex flex-col gap-12 self-stretch">
                <div className="div_hidden-uploadcare flex flex-col items-start self-stretch">
                  {companyData.profile_image && (
                    <img
                      src={companyData.profile_image}
                      className="object-cover -mb-9 object-center lightgray 0px -0.308px / 100% 100.217% no-repeat] self-stretch h-[17.75rem] max-w-[1184px] rounded-3xl"
                    />
                  )}
                  <div className="self-stretch h-auto rounded-3xl bg-white py-12 px-16">
                    <div className="flex items-start w-[1088px]">
                      <div className="div_w-full flex flex-col items-start gap-4 self-stretch pb-[1.3125rem]">
                        <span className="text-[2.5rem] font-medium leading-[56px]">
                          {companyData.name}
                        </span>
                        {companyData.snippet && (
                          <span className="whitespace-pre-wrap font-medium">
                            {companyData.snippet}
                          </span>
                        )}
                      </div>
                      {companyData.logo && (
                        <div className="flex flex-col flex-shrink-0 items-start pl-4 w-[8.25rem] h-[7.25rem]">
                          <img src={companyData.logo} />
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col items-start gap-2 w-full">
                      <div className="flex items-start self-stretch">
                        <span className="leading-6">Секторы:</span>
                        {companyData.sector.map(({ id, value }) => (
                          <span key={id} className="font-medium pl-3 leading-6">
                            {value}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-start self-stretch">
                        <span className=" leading-6">Сотрудники:</span>
                        <span className="pl-3 text-center font-medium leading-6">
                          {companyData.employees_number.value}
                        </span>
                      </div>
                      <div className=" text-base flex items-start self-stretch ">
                        <span className="text-base leading-6">Локации:</span>
                        {companyData.locations.map(({ id, value }) => (
                          <span key={id} className="font-medium leading-6 pl-3">
                            {value}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-start w-full mt-8 flex gap-3 items-start px-0">
                      {companyData.links?.map(({ id, name }) => (
                        <a
                          key={id}
                          href={name}
                          className="font-medium underline h-6 text-center leading-6"
                        >
                          {getLinkType(companyData.name)}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="w-auto max-w-[1184px] p-16 rounded-3xl bg-white">
                  <span className="text-base font-medium leading-6 whitespace-pre-wrap">
                    {companyData.description}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};
