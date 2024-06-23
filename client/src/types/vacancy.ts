export interface GetVacanciesResponse {
  count: number;
  next: string;
  previous: null;
  results: IVacancy[];
}

export interface GetVacanciesProps {
  search?: string;
  page?: number;
}

export interface GetVacancyResponse {
  vacancy: IVacancy;
}

export interface GetVacancyProps {
  id?: string;
}
export interface IVacancy {
  id: number;
  name: string;
  locations: ICommonType[];
  salary: ISalary;
  type: ICommonType;
  published_at: string;
  created_at: string;
  archived: boolean;
  url: string;
  employer: IEmployer;
  schedule: ICommonType;
  employment: ICommonType;
  experience: ICommonType;
  description: string;
  snippet: string;
  tags: ICommonType[];
}

interface IEmployer {
  id: number;
  email: string;
  username: string;
  first_name: string;
  last_name: string;
}

export interface ISalary {
  id: number;
  _from: number;
  to: number;
  currency: string;
  value: string;
}

interface ICommonType {
  id: number;
  name: string;
  value: string;
}

interface Result {
  id: number;
  name: string;
  locations: Location[];
  salary: Salary | Salary2 | null;
  type: Location;
  published_at: string;
  created_at: string;
  archived: boolean;
  url: null;
  employer: Employer;
  schedule: Location | null;
  employment: Location | null;
  experience: Location | null;
  description: string;
  snippet: string;
  tags: Location[];
}

interface Employer {
  id: number;
  name: string;
  snippet: string;
  sector: Location[];
  employees_number: Location;
  locations: Location[];
  links: Link[];
  logo: string;
  startup: boolean;
}

interface Link {
  id: number;
  name: string;
}

interface Salary2 {
  id: number;
  _from: number;
  to: number;
  currency: string;
  value: string;
}

interface Salary {
  id: number;
  _from: number;
  to: null;
  currency: string;
  value: string;
}

interface Location {
  id: number;
  name: string;
  value: string;
}
