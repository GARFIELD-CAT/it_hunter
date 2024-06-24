export interface ILoginBody {
  email: string;
  password: string;
}

export interface IToken {
  auth_token: string;
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

export type IValidationErrors = {
  [key in keyof IRegistrationBody]?: string[];
}

export interface IRegistrationResponse {
  email: string;
  first_name: string;
  phone: string;
  id: number;
  last_name: string | null;
}

