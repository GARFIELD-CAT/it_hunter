import Spinner from "@/components/Spinner";
import clsx from "clsx";
import { text } from "stream/consumers";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  isLoading?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const defaultClasses =
  "flex flex-shrink-0 justify-center items-center py-3 px-6 h-12 rounded-md bg-black text-white text-neutral-950 text-center text-[.9375rem] leading-6";

const Button: React.FC<ButtonProps> = ({
  text,
  isLoading,
  className,
  children,
  ...props
}) => {
  console.log("🚀 ~ className:", className);
  return (
    <button
      type="button"
      className={clsx(defaultClasses, className)}
      {...props}
    >
      {isLoading ? <Spinner /> : children ?? text}
    </button>
  );
};

export default Button;
