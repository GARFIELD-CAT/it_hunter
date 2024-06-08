import { GetVacanciesProps } from '@/types/vacancy';
import create from 'zustand';

interface VacanciesState {
  params: GetVacanciesProps;
  setParams: (newParams: GetVacanciesProps) => void;
}

export const useVacanciesStore = create<VacanciesState>((set) => ({
  params: {
    page: 1,
  },
  setParams: (newParams) =>
    set((state) => ({ params: { ...state.params, ...newParams } })),
}));
