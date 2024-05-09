import { CompanyCard } from '@/components/CompanyCard';
import { VacancyCard } from '@/components/VacancyCard';
import { ICompanyShort } from '@/types/company';

const MOCK_COMPANIES: Array<ICompanyShort> = new Array(14).fill({
  id: '1',
  logo: 'https://logos-download.com/wp-content/uploads/2022/01/Maker_MKR_Logo.png',
  name: 'MAker DAO',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nemo eos aspernatur tempora optio sunt unde expedita aliquam veniam vel. Est quidem repellendus ipsa nemo! Quisquam, quos. Quisquam, quos.',
});

export const VacanciesSection = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <div className="flex justify-between items-center">
        <h2 className="text-[2.45119rem] not-italic font-normal leading-[2.75rem]">
          Новые вакансии
        </h2>
        <div className="text-[1rem] not-italic font-normal leading-6">
          Смотреть все
        </div>
      </div>
      <div className="grid gap-x-16 gap-y-12 grid-cols-2 mt-[3rem]">
        {MOCK_COMPANIES.map((company) => (
          <VacancyCard
            key={company.id}
            companyLogoSrc={company.logo}
            companyName={company.name}
            description={company.description}
          />
        ))}
      </div>
    </div>
  );
};
