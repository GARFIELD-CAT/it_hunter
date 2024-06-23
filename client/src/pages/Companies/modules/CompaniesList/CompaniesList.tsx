import { CompanyCard } from "@/components/CompanyCard";
import { shortString } from "@/lib/helper";
import { ICompany, ICompanyShort } from "@/types/company";
import clsx from "clsx";

export const CompaniesList = ({
  className,
  data,
}: {
  className?: string;
  data: ICompany[];
}) => {
  return (
    <div className={clsx("grid gap-12 grid-cols-2", className)}>
      {data.map((company) => (
        <CompanyCard
          to={`/company/${company.id}`}
          key={company.id}
          companyLogoSrc={company.logo}
          companyName={company.name}
          description={shortString(company.description ?? "", 150)}
        />
      ))}
    </div>
  );
};
