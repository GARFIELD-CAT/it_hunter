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
  password2: yup.string()
    .required("Password repeat is required")
    .oneOf([yup.ref('password')], 'Passwords must match'),
});

export const createCompanySchema = yup.object().shape({
  name: yup.string().required("Название компании обязательно"),
  snippet: yup.string().required("Краткое описание обязательно"),
  sector: yup.array().of(
    yup.object().shape({
      id: yup.string().required(),
      name: yup.string().required(),
      value: yup.string().required(),
    })
  ).required("Выберите хотя бы один сектор"),
  locations: yup.array().of(
    yup.object().shape({
      id: yup.string().required(),
      name: yup.string().required(),
      value: yup.string().required(),
    })
  ).required("Выберите хотя бы одну локацию"),
  employees_number: yup.array().of(
    yup.object().shape({
      id: yup.string().required(),
      name: yup.string().required(),
      value: yup.string().required(),
    })
  ).required("Выберите количество сотрудников"),
  description: yup.string().required("Описание обязательно"),
});