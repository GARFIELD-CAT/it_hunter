export interface GetCompaniesResponse {
  count: number;
  next: string;
  previous: null;
  results: ICompany[];
}

export interface GetCompaniesProps {
  name?: string;
  page?: number;
}

export interface ICompanyShort {
  id: string | number;
  logo: string;
  name: string;
  description: string;
}

export interface GetCompanyProps {
  id?: string;
}

export interface ICompany {
  id: number;
  name: string;
  owner: IOwner;
  snippet?: string;
  description?: string;
  sector: ISector[];
  employees_number: ISector;
  locations: ISector[];
  links: ICompanyLink[];
  technologies?: string;
  startup: boolean;
  logo?: string;
  profile_image?: string;
  created_at: string;
}

interface ICompanyLink {
  id: number;
  name: string;
}

export interface ISector {
  id: number;
  name: string;
  value: string;
}

interface IOwner {
  id: number;
  email: string;
  first_name: string;
  last_name: null | string;
  phone: null | string;
}

export interface ICreateCompanyBody {
  name: string;
  snippet: string;
  sector: number[];
  locations: number[];
  employees_number: number;
  description: string;
}

export interface ICreateCompanyValidationBody {
  name: string;
  snippet: string;
  sector: ISector[];
  locations: ISector[];
  employees_number: ISector[];
  description: string;
}

export interface ICreateCompanyResponse {
  name: string;
  id: number;
  snippet: string;
  sector: number[];
  locations: number[];
  employees_number: number;
  description: string;
}

type ICreateCompanyErrors = {
  [key in keyof ICreateCompanyValidationBody]?: string[];
}

export type ICreateCompanyErrorsFull = ICreateCompanyErrors & {
  ['errors:']: string;
}