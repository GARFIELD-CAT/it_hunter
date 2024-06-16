import { type InputHTMLAttributes } from "react";
import {
  type FieldErrors,
  type FieldValues,
  type Path,
  type UseFormRegister,
} from "react-hook-form";

export interface Props<
  T extends FieldValues = FieldValues,
  U extends FieldValues = FieldValues
> extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  disabled?: boolean;
  register: UseFormRegister<T>;
  errors?: FieldErrors<U>;
}

const Input = <T extends FieldValues, U extends FieldValues>({
  disabled = false,
  placeholder,
  errors,
  label,
  name,
  value,
  register,
  ...rest
}: Props<T, U>) => {
  return (
    <div className="flex flex-col">
      <label className="flex" htmlFor={name}>
        {label ?? ""}
      </label>

      <input
        className="self-stretch pt-[0.9375rem] pb-[0.9375rem] pl-[1.0625rem] pr-[1.0625rem] h-12 rounded-md border border-[#adadad] bg-transparent text-[#000] placeholder-[#adadad] text-sm leading-6"
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        {...register(name as Path<T>)}
        {...rest}
      />
      {errors && errors[name as keyof U] && (
        <span className="text-xs text-[#ff0000] mt-1" role="alert">
          {errors[name as keyof U]?.message as string}
        </span>
      )}
    </div>
  );
};

export default Input;
