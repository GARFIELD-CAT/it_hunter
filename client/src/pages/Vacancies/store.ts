import { GetVacanciesProps } from "@/types/vacancy";
import create from "zustand";

interface VacanciesState {
  params: GetVacanciesProps;
  setParams: (newParams: GetVacanciesProps) => void;
  resetParamsWithoutResetPage: () => void;
  resetParams: () => void;
}

export const useVacanciesStore = create<VacanciesState>((set) => ({
  params: {},
  setParams: (newParams) =>
    set((state) => ({ params: { ...state.params, ...newParams } })),
  resetParamsWithoutResetPage: () =>
    set((state) => ({ params: { page: state.params.page } })),
  resetParams: () => set({ params: {} }),
}));
