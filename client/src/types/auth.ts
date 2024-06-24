export interface ILoginBody {
  email: string;
  password: string;
}

export interface IToken {
  auth_token: string;
}

export type ILoginValidationErrors = {
  non_field_errors: string[];
}

export interface IRegistrationBody {
  email: string;
  first_name: string;
  phone: string;
  password: string;
}

export interface IRegistrationBodyValidation extends IRegistrationBody {
  password2: string;
}

export type IRegistrationValidationErrors = {
  [key in keyof IRegistrationBody]?: string[];
}

export interface IRegistrationResponse {
  email: string;
  first_name: string;
  phone: string;
  id: number;
  last_name: string | null;
}

