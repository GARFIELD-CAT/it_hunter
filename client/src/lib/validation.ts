import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().required("Email is required"),
  password: yup.string().required("Password is required"),
});

export const registrationSchema = yup.object().shape({
  email: yup.string().required("Email is required"),
  first_name: yup.string().required("Name is required"),
  phone: yup.string().required("Last name is required"),
  password: yup.string().required("Password is required"),
  password2: yup
    .string()
    .required("Password repeat is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
});

export const createCompanySchema = yup.object().shape({
  name: yup.string().required("Название компании обязательно"),
  snippet: yup.string().required("Краткое описание обязательно"),
  sector: yup
    .array()
    .of(
      yup.object().shape({
        id: yup.number().required(),
        name: yup.string().required(),
        value: yup.string().required(),
      })
    )
    .required("Выберите хотя бы один сектор"),
  locations: yup
    .array()
    .of(
      yup.object().shape({
        id: yup.number().required(),
        name: yup.string().required(),
        value: yup.string().required(),
      })
    )
    .required("Выберите хотя бы одну локацию"),
  employees_number: yup
    .array()
    .of(
      yup.object().shape({
        id: yup.number().required(),
        name: yup.string().required(),
        value: yup.string().required(),
      })
    )
    .required("Выберите количество сотрудников"),
  description: yup.string().required("Описание обязательно"),
});

export const createVacancySchema = yup.object({
  name: yup.string().required("Название вакансии обязательно"),
  description: yup.string().required("Описание обязательно"),
  location: yup
    .object()
    .shape({
      id: yup.number().required(),
      name: yup.string().required(),
      value: yup.string().required(),
    })
    .required("Выберите локацию"),
  employmentType: yup
    .object({
      id: yup.number().required(),
      name: yup.string().required(),
      value: yup.string().required(),
    })
    .required("Выберите тип занятости"),
  experience: yup
    .object({
      id: yup.number().required(),
      name: yup.string().required(),
      value: yup.string().required(),
    })
    .required("Выберите опыт работы"),
  tag: yup
    .object({
      id: yup.number().required(),
      name: yup.string().required(),
      value: yup.string().required(),
    })
    .required("Выберите тег"),
  schedule: yup
    .object({
      id: yup.number().required(),
      name: yup.string().required(),
      value: yup.string().required(),
    })
    .required("Выберите график работы"),
  salary_from: yup.string().required("Укажите зарплату от"),
  salary_to: yup.string().required("Укажите зарплату до"),
});
