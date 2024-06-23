import { CompanyCard } from "@/components/CompanyCard";
import { VacancyCard } from "@/components/VacancyCard";
import { shortString } from "@/lib/helper";
import { useGlobalVacanciesQuery } from "@/pages/Vacancies/useVacancies";
import { ICompanyShort } from "@/types/company";
import { Link } from "react-router-dom";

export const VacanciesSection = ({ className }: { className?: string }) => {
  const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } =
    useGlobalVacanciesQuery();

  return (
    <div className={className}>
      <div className="flex justify-between items-center">
        <h2 className="text-[2.45119rem] not-italic font-normal leading-[2.75rem]">
          Новые вакансии
        </h2>
        <Link
          to="/vacancies"
          className="text-[1rem] not-italic font-normal leading-6"
        >
          Смотреть все
        </Link>
      </div>
      <div className="grid gap-x-16 gap-y-12 grid-cols-2 mt-[3rem]">
        {data?.pages
          .map((page) => page.results)
          .flat()
          .slice(0, 4)
          .map((vacancy) => (
            <VacancyCard
              to={`/vacancy/${vacancy.id}`}
              key={vacancy.id}
              companyLogoSrc="https://logos-download.com/wp-content/uploads/2022/01/Maker_MKR_Logo.png"
              companyName={vacancy.name}
              description={shortString(vacancy.description ?? "", 150)}
              skills={vacancy.tags.map((tag) => tag.value)}
              city={vacancy.locations[0].name}
              salary={vacancy.salary}
            />
          ))}
      </div>
    </div>
  );
};
