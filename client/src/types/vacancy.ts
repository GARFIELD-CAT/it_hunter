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

export interface IVacancy {
  id: number;
  name: string;
  locations: ICommonType[];
  salary: Salary;
  type: ICommonType;
  published_at: string;
  created_at: string;
  archived: boolean;
  url: string;
  employer: Employer;
  schedule: ICommonType;
  employment: ICommonType;
  experience: ICommonType;
  description: string;
  snippet: string;
  tags: ICommonType[];
}

interface Employer {
  id: number;
  email: string;
  username: string;
  first_name: string;
  last_name: string;
}

interface Salary {
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
