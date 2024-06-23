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
  employees_number: ICommonType;
  logo: string;
  links?: Pick<ICommonType, 'id' | 'name'>[];
  locations: ICommonType[];
  name: string;
  snippet: string;
  startup: boolean;
  sector: ICommonType[];
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

