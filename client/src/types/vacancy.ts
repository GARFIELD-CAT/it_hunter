export interface GetVacanciesResponse {
  count: number;
  next: string;
  previous: null;
  results: Vacancy[];
}

export interface GetVacanciesProps {
  search?: string;
  page: number;
}

export interface Vacancy {
  id: number;
  name: string;
  locations: Location[];
  salary: Salary;
  type: Location;
  published_at: string;
  created_at: string;
  archived: boolean;
  url: string;
  employer: Employer;
  schedule: Location;
  employment: Location;
  experience: Location;
  description: string;
  snippet: string;
  tags: Location[];
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

interface Location {
  id: number;
  name: string;
  value: string;
}
