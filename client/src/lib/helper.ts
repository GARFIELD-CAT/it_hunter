import { ISalary } from "@/types/vacancy";

export const formatDate = (date: Date | string): string => {
  return new Date(date).toLocaleDateString("ru", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const getSalary = (salary: ISalary): string => {
  if (!salary._from && !salary.to) {
    return "-";
  }
  const from = salary._from ? `от ${salary._from} ` : "";
  const to = salary.to ? `до ${salary.to} ` : "";

  return from + to + salary.currency;
};
