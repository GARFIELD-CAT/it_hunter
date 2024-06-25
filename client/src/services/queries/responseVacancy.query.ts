import { useMutation } from "@tanstack/react-query";

export const useResponseVacancyQuery = () =>
  useMutation(["responseVacancy"], async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const res = {
          success: true,
        };
        resolve(res);
      }, 2000); 
    });
  });