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
