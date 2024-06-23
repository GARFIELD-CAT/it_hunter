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
  sector: Sector[];
  employees_number: Sector;
  locations: Sector[];
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

interface Sector {
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
