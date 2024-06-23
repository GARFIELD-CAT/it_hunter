import { api } from "@/lib/api";
import { IFilterValue } from "@/types/filters";
import type { IVacancy, GetVacancyProps } from "@/types/vacancy";
import { getVacancy } from "./vacancy.service";

export const getLocations = async (): Promise<IFilterValue[]> => {
  const { data } = await api.get<IFilterValue[]>(`vacancies/locations/`);
  return data;
};

export const getTags = async (): Promise<IFilterValue[]> => {
  const { data } = await api.get<IFilterValue[]>(`vacancies/tags/`);
  return data;
};

export const getEmploymentTypes = async (): Promise<IFilterValue[]> => {
  const { data } = await api.get<IFilterValue[]>(`vacancies/employments/`);
  return data;
};

export const getSchedules = async (): Promise<IFilterValue[]> => {
  const { data } = await api.get<IFilterValue[]>(`vacancies/schedules/`);
  return data;
};

export const getExperiences = async (): Promise<IFilterValue[]> => {
  const { data } = await api.get<IFilterValue[]>(`vacancies/experiences/`);
  return data;
};

export const getTypes = async (): Promise<IFilterValue[]> => {
  const { data } = await api.get<IFilterValue[]>(`vacancies/types/`);
  return data;
};

export const fetchAllFilters = async () => {
  const [locations, tags, employmentTypes, schedules, experiences, types] =
    await Promise.all([
      getLocations(),
      getTags(),
      getEmploymentTypes(),
      getSchedules(),
      getExperiences(),
      getTypes(),
    ]);

  return {
    locations,
    tags,
    employmentTypes,
    schedules,
    experiences,
    types,
  };
};
