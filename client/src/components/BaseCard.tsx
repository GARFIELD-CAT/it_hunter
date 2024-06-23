import Arrow from "@/assets/svg/arrow.svg";
import src from "concurrently";
import { Link, LinkProps } from "react-router-dom";

export interface IBaseCardProps extends Omit<LinkProps, "content"> {
  companyName: string;
  companyLogoSrc?: string;
  content: React.ReactNode;
  footer?: React.ReactNode;
}

export const BaseCard = ({
  companyLogoSrc,
  companyName,
  content,
  footer,
  ...rest
}: IBaseCardProps) => {
  return (
    <Link
      {...rest}
      className="p-12 rounded-3xl bg-white hover:[box-shadow:0px_10px_10px_-5px_rgba(0,_0,_0,_0.04),_0px_20px_25px_-5px_rgba(0,_0,_0,_0.10)] transition-[box-shadow_0.3s] cursor-pointer text-left"
    >
      <div className="flex gap-4 items-center">
        <img
          className="h-[2.5rem] aspect-square object-cover object-center"
          src={companyLogoSrc}
          alt="Logo"
        />
        <h4 className="text-[1.25rem] font-normal leading-[1.875rem]">
          {companyName}
        </h4>
      </div>
      <div>{content}</div>
      <div className="flex justify-between items-end">
        <div>{footer}</div>
        <button className="cursor-pointer group/item">
          <img
            className="cursor-pointer transition-transform group-hover/item:translate-x-1"
            src={Arrow}
            alt=""
          />
        </button>
      </div>
    </Link>
  );
};
