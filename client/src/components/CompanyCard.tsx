import { BaseCard, IBaseCardProps } from './BaseCard';

interface ICompanyCardProps extends Omit<IBaseCardProps, 'content'> {
  description: string;
}

export const CompanyCard = ({ description, ...rest }: ICompanyCardProps) => {
  return (
    <BaseCard
      {...rest}
      content={
        <p className="text-[#6A6A6A] text-[0.96875rem] leading-6 mt-6 mb-[2.75rem]">
          {description}
        </p>
      }
    ></BaseCard>
  );
};
