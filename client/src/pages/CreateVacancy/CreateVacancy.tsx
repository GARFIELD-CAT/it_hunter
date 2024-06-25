import Button from "@/components/Button";
import { Container } from "@/components/Container";
import { ControlledSelect } from "@/components/ControlledSelect";
import { Footer } from "@/components/Footer";
import Input from "@/components/Input";
import { getLinkType } from "@/lib/helper";
import { createVacancySchema } from "@/lib/validation";
import { useCompanyByTokenQuery } from "@/services/queries/company.query";
import { useCreateVacancyQuery } from "@/services/queries/createVacancy.query";
import { useFiltersQuery } from "@/services/queries/filters.query";
import useAuthStore from "@/store/useAuthStore";
import { ICompany } from "@/types/company";
import { ICreateVacancyValidationBody } from "@/types/vacancy";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { SubmitHandler, useForm, useWatch } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export const CreateVacancy = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStore();

  const { data: vacancyOptions } = useFiltersQuery();

  const { data: companyData } = useCompanyByTokenQuery();

  const {
    mutateAsync: createVacancy,
    isError,
    error,
  } = useCreateVacancyQuery();

  const {
    control,
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<ICreateVacancyValidationBody>({
    resolver: yupResolver(createVacancySchema),
  });

  const formValues = useWatch({
    control,
  });

  useEffect(() => {
    console.log("Current form values:", formValues);
  }, [formValues]);

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

  const onSubmit: SubmitHandler<ICreateVacancyValidationBody> = async (
    data
  ) => {
    try {
      const {
        name,
        description,
        location,
        employmentType,
        experience,
        tag,
        schedule,
        salary_from,
        salary_to,
      } = data;

      const requestData = {
        name,
        description,
        locations: [location.id],
        tags: [tag.id],
        salary: {
          _from: parseInt(salary_from),
          to: parseInt(salary_to),
          currency: "RUR",
        },
        type: 7,
        schedule: schedule.id,
        employment: employmentType.id,
        experience: experience.id,
        snippet: description,
      };

      const response = await createVacancy(requestData);

      if (response.id) {
        navigate(`/vacancies/`);
      }
    } catch (error) {
      toast.error(error as string, {
        theme: "colored",
      });
    }
  };

  return (
    <div className="flex flex-1 flex-col justify-between items-start mt-4">
      <Container className="flex flex-col gap-5 items-start pb-16 w-full max-w-[1184px]">
        <div className="header-block bg-white rounded-3xl py-4 px-6 flex justify-between shrink items-center w-full">
          <div className="flex items-center">
            <button className="flex flex-col items-start p-2 justify-center">
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
                Создание вакансии
              </div>
            </div>
          </div>
          <Button text="Опубликовать" onClick={handleSubmit(onSubmit)} />
        </div>

        <div className="flex lg:flex-row flex-col-reverse items-center lg:items-start justify-center gap-5 w-full">
          <div className="left-block flex flex-col lg:basis-4/12">
            <div className="company-information-block flex flex-col min-w-96 w-full">
              <CompanySection companyData={companyData} />

              <div className="vacancy-conditions-block mt-6  bg-white p-8 rounded-3xl">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col items-start gap-1 self-stretch">
                    <div className="flex flex-col items-start text-gray-500 text-[.8125rem] leading-[1.3125rem]">
                      Локация:
                    </div>
                    <ControlledSelect
                      name="location"
                      control={control}
                      options={vacancyOptions?.locations ?? []}
                      placeholder="Выбрать локацию"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-1 self-stretch">
                    <div className="text-gray-500 text-[.8125rem] leading-[1.3125rem]">
                      Занятость / Тип договора:
                    </div>
                    <ControlledSelect
                      name="employmentType"
                      control={control}
                      options={vacancyOptions?.employmentTypes ?? []}
                      placeholder="Выбрать"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-1 self-stretch">
                    <div className="flex flex-col items-start text-gray-500 text-[.8125rem] leading-[1.3125rem]">
                      Опыт:
                    </div>
                    <ControlledSelect
                      name="experience"
                      control={control}
                      options={vacancyOptions?.experiences ?? []}
                      placeholder="Выбрать"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-1 self-stretch">
                    <div className="flex flex-col items-start text-gray-500 text-[.8125rem] leading-[1.3125rem]">
                      График:
                    </div>
                    <ControlledSelect
                      name="schedule"
                      control={control}
                      options={vacancyOptions?.schedules ?? []}
                      placeholder="Выбрать"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-1 self-stretch">
                    <div className="flex flex-col items-start text-gray-500 text-[.8125rem] leading-[1.3125rem]">
                      Теги:
                    </div>
                    <ControlledSelect
                      name="tag"
                      control={control}
                      options={vacancyOptions?.tags ?? []}
                      placeholder="Выбрать"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-1 self-stretch">
                    <div className="text-gray-500 text-[.8125rem] leading-[1.3125rem]">
                      Зарплата:
                    </div>
                    <div>
                      от:
                      <Input
                        errors={errors}
                        placeholder="40 000 RUB"
                        className="border-0 focus:outline-none text-lg"
                        id="salary_from"
                        register={register}
                        name="salary_from"
                      />
                    </div>
                    <div>
                      до:
                      <Input
                        errors={errors}
                        placeholder="80 000 RUB"
                        className="border-0 focus:outline-none text-lg"
                        id="salary_to"
                        register={register}
                        name="salary_to"
                      />
                    </div>
                  </div>
                  {/* <div className="leading-6 font-medium">{getSalary(salary)}</div> */}
                </div>
              </div>
            </div>
          </div>

          <div className="vacancy-description-block flex flex-col justify-center shrink lg:basis-8/12 min-w-96 w-full bg-white rounded-3xl p-6">
            <div className="flex items-center pb-2">
              {/* {tags?.map(({ value }) => (
                <div className="flex flex-col items-start pt-0 pb-2 pl-0 pr-2 max-w-[19.25rem]">
                  <div className="flex flex-col items-start py-1 px-2 max-w-[18.75rem] rounded bg-neutral-200 text-sm leading-[0.875rem]">
                    {value}
                  </div>
                </div>
              ))} */}
            </div>
            <Input
              errors={errors}
              placeholder="Название компании"
              id="name"
              register={register}
              name="name"
              className="border-0 focus:outline-none text-5xl leading-[48px] mb-5"
            />
            <div className="space-y-6 leading-6 whitespace-pre-wrap">
              <textarea
                {...register("description")}
                className="w-full h-52 border-0 focus:outline-none text-lg"
                placeholder="Описание компании"
              />
              {errors.description && (
                <div className="text-red-500 text-sm">
                  {errors.description.message}
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

const CompanySection = ({ companyData }: { companyData?: ICompany }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-6 rounded-3xl">
      <div className="flex items-center">
        <img
          className="w-14 h-14 bg-cover rounded-full"
          src={companyData?.logo}
        />
        <div className="pl-4 font-medium text-xl">{companyData?.name}</div>
      </div>
      <div className="h-18">{companyData?.snippet}</div>
      <div className="mt-4">
        <div className="flex items-start">
          <div className="leading-6">Секторы:</div>
          {companyData?.sector?.map(({ id, value }) => (
            <div key={id} className="pl-3 font-medium leading-6">
              {value}
            </div>
          ))}
        </div>
        <div className="flex items-start mt-2">
          <div className="leading-6">Сотрудники:</div>
          <div className="pl-3 text-center font-medium leading-6">
            {companyData?.employees_number?.value}
          </div>
        </div>
        <div className="flex items-start mt-2">
          <div className="leading-6">Локации:</div>
          {companyData?.locations?.map(({ id, value }) => (
            <div key={id} className="pl-3 font-medium leading-6">
              {value}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <div className="flex gap-3 items-start">
          {companyData?.links?.map(({ id, name }) => (
            <a key={id} href={name} className="underline font-medium leading-6">
              {getLinkType(name)}
            </a>
          ))}
        </div>
        <button
          onClick={() => navigate("/my-company")}
          className="p-1 w-8 h-8 bg-neutral-200 rounded-lg flex justify-center items-center"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_6_991)">
              <path
                d="M3.75 12H20.25"
                stroke="black"
                stroke-width="1.125"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.5 5.25L20.25 12L13.5 18.75"
                stroke="black"
                stroke-width="1.125"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_6_991">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </div>
  );
};
