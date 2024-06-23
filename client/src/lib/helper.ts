import { ISalary } from "@/types/vacancy";

export const formatDate = (date: Date | string): string => {
  return new Date(date).toLocaleDateString("ru", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const getSalary = (salary: ISalary): string => {
  if (!salary || (!salary._from && !salary.to)) {
    return "-";
  }
  const from = salary._from ? `от ${salary._from} ` : "";
  const to = salary.to ? `до ${salary.to} ` : "";

  return from + to + salary.currency;
};

export const shortString = (str: string, length: number): string => {
  return str.length > length ? str.slice(0, length) + "..." : str;
};

export function createQueryString(params: Record<string, any>): string {
  console.log("🚀 ~ createQueryString ~ params:", params);
  const searchParams = new URLSearchParams();
  Object.keys(params).forEach((key) => {
    const value = params[key];
    if (value !== undefined) {
      // Проверка на undefined, чтобы не включать пустые параметры
      searchParams.append(key, value.toString());
    }
  });
  return searchParams.toString();
}
