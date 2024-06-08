import { Vacancy } from '@/types/vacancy';
import { BaseCard, IBaseCardProps } from './BaseCard';

interface ICompanyCardProps extends Omit<IBaseCardProps, 'content'> {
  description: string;
  city?: string;
  skills?: string[];
  salary?: Vacancy['salary'];
}

export const VacancyCard = ({
  description,
  skills,
  city,
  salary,
  ...rest
}: ICompanyCardProps) => {
  const FooterContent = () => (
    <div className="flex flex-col items-start gap-2">
      <div className="flex flex-wrap items-center content-center self-stretch">
        {skills?.map((skill) => (
          <div className="flex flex-col items-start pt-0 pb-2 pl-0 pr-2 max-w-[19.25rem]">
            <div className="flex flex-col items-start py-1 px-2 max-w-[18.75rem] rounded bg-[#b5ddc9] text-neutral-950 text-sm leading-[0.875rem]">
              {skill}
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-start self-stretch">
        <div className="flex flex-col items-start self-stretch pr-4 text-[#6a6a6a] text-sm leading-[1.3125rem]">
          От {salary?._from} {salary?.currency} до {salary?.to}{' '}
          {salary?.currency}
        </div>
        <div className="flex flex-col items-start self-stretch pl-[1.0625rem] py-0 pr-4 border-l border-l-[#ccc] text-[#6a6a6a] text-sm leading-[1.3125rem]">
          {city}
        </div>
      </div>
    </div>
  );

  return (
    <BaseCard
      {...rest}
      content={
        <p className="text-[#6A6A6A] text-[0.96875rem] leading-6 mt-6 mb-[2.75rem]">
          {description}
        </p>
      }
      footer={<FooterContent />}
    ></BaseCard>
  );
};
