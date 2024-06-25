import { CompanyCard } from "@/components/CompanyCard";
import { shortString } from "@/lib/helper";
import { useCompaniesQuery } from "@/services/queries/companies.query";
import { Link } from "react-router-dom";

export const CompanySection = ({ className }: { className?: string }) => {
  const { data } = useCompaniesQuery({
    search: "",
  });

  const formattedCompaniesData = data?.pages
    .map((page) => page.results)
    .flat()
    .slice(0, 4);

  return (
    <div className={className}>
      <div className="flex justify-between items-center">
        <h2 className="text-[2.45119rem] not-italic font-normal leading-[2.75rem]">
          Компании недели
        </h2>
        <Link
          to="/companies"
          className="text-[1rem] not-italic font-normal leading-6"
        >
          Смотреть все
        </Link>
      </div>
      <div className="grid gap-x-16 gap-y-12 grid-cols-2 mt-[3rem]">
        {formattedCompaniesData?.map((company) => (
          <CompanyCard
            to={`/company/${company.id}`}
            key={company.id}
            companyLogoSrc={company.logo}
            companyName={company.name}
            description={shortString(company.description ?? "", 150)}
          />
        ))}
      </div>
    </div>
  );
};
