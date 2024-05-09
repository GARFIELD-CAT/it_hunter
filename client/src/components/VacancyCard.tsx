import { BaseCard, IBaseCardProps } from './BaseCard';

interface ICompanyCardProps extends Omit<IBaseCardProps, 'content'> {
  description: string;
}

export const VacancyCard = ({ description, ...rest }: ICompanyCardProps) => {
  const FooterContent = () => (
    <div className="flex flex-col items-start gap-2">
      <div className="flex flex-wrap items-center content-center self-stretch">
        <div className="flex flex-col items-start pt-0 pb-2 pl-0 pr-2 max-w-[19.25rem]">
          <div className="flex flex-col items-start py-1 px-2 max-w-[18.75rem] rounded bg-[#b5ddc9] text-neutral-950 text-sm leading-[0.875rem]">
            PHP
          </div>
        </div>
        <div className="flex flex-col items-start pt-0 pb-2 pl-0 pr-2 max-w-[19.25rem]">
          <div className="flex flex-col items-start py-1 px-2 max-w-[18.75rem] rounded bg-[#b5ddc9] text-neutral-950 text-sm leading-[0.875rem]">
            JavaScript
          </div>
        </div>
        <div className="flex flex-col items-start pt-0 pb-2 pl-0 pr-2 max-w-[19.25rem]">
          <div className="flex flex-col items-start py-1 px-2 max-w-[18.75rem] rounded bg-[#b5ddc9] text-neutral-950 text-sm leading-[0.875rem]">
            MySQL
          </div>
        </div>
      </div>
      <div className="flex items-start self-stretch">
        <div className="flex flex-col items-start self-stretch pr-4 text-[#6a6a6a] text-sm leading-[1.3125rem]">
          От 80 000 ₽ до 100 000 ₽
        </div>
        <div className="flex flex-col items-start self-stretch pl-[1.0625rem] py-0 pr-4 border-l border-l-[#ccc] text-[#6a6a6a] text-sm leading-[1.3125rem]">
          Екатеринбург
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
