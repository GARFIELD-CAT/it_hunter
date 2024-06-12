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
