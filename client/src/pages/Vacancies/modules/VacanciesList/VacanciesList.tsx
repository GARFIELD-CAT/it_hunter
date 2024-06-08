import { CompanyCard } from '@/components/CompanyCard';
import { VacancyCard } from '@/components/VacancyCard';
import { ICompanyShort } from '@/types/company';
import { useGlobalVacanciesQuery } from '../../useVacancies';

const MOCK_COMPANIES: Array<ICompanyShort> = new Array(14).fill({
  id: '1',
  logo: 'https://logos-download.com/wp-content/uploads/2022/01/Maker_MKR_Logo.png',
  name: 'MAker DAO',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nemo eos aspernatur tempora optio sunt unde expedita aliquam veniam vel. Est quidem repellendus ipsa nemo! Quisquam, quos. Quisquam, quos.',
});

export const VacanciesList = ({ className }: { className?: string }) => {
  const { data } = useGlobalVacanciesQuery();

  return (
    <>
      <div className="mt-6 flex flex-col items-stretch gap-6 w-full">
        {data?.results?.map((company) => (
          <VacancyCard
            to={`/vacancy/${company.id}`}
            key={company.id}
            companyLogoSrc="https://logos-download.com/wp-content/uploads/2022/01/Maker_MKR_Logo.png"
            companyName={company.name}
            description={company.description}
            skills={company.tags.map((tag) => tag.name)}
            city={company.locations[0].name}
            salary={company.salary}
          />
        ))}
      </div>
      <div className="inline-flex mx-auto justify-center items-center pt-[1.4375rem] pb-6 px-24 rounded-full bg-white mt-12">
        <div className="text-neutral-950 text-center font-['SansSerif'] text-[1.75rem] leading-7">
          Показать еще
        </div>
        <div className="flex justify-end items-center pl-1">
          <div className="flex flex-col items-center text-neutral-950 text-center font-['SansSerif'] text-sm leading-7">
            +231
          </div>
        </div>
      </div>
    </>
  );
};
