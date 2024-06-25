import {
  ICreateCompanyBody,
  ICreateCompanyValidationBody,
  ISector,
} from "@/types/company";
import React, { useState } from "react";
import {
  UseFormRegister,
  useFieldArray,
  Control,
  FieldErrors,
} from "react-hook-form";

interface MultiSelectProps {
  errors: FieldErrors<ICreateCompanyValidationBody>;
  placeholder: string;
  id: string;
  register: UseFormRegister<any>;
  name: keyof ICreateCompanyValidationBody;
  options: ISector[];
  control: Control<any>;
  isMultiple?: boolean;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  errors,
  placeholder,
  id,
  name,
  options,
  control,
  isMultiple = true,
}) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const { fields, append, remove } = useFieldArray({
    control,
    name: name as string,
  });

  const handleSelect = (option: ISector) => {
    if (isMultiple) {
      append(option);
    } else {
      remove();
      append(option);
      setIsDropdownVisible(false);
    }
  };

  return (
    <div className="inline-flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span>{placeholder}:</span>
        {fields.map((item, index) => (
          <div
            key={item.id}
            className="font-medium bg-slate-100 px-2 rounded-md"
          >
            {/* типизацию field не смог победить */}
            {options.find((el) => el.name === item.name)?.value}
            <button
              className="ml-1"
              type="button"
              onClick={() => remove(index)}
            >
              ✕
            </button>
          </div>
        ))}
        {!isDropdownVisible && (
          <button
            type="button"
            onClick={() => setIsDropdownVisible(!isDropdownVisible)}
            className="text-gray-500"
          >
            Добавить +
          </button>
        )}
      </div>
      {isDropdownVisible && (
        <select
          id={id}
          onChange={(e) => {
            const selectedOption = options.find(
              (opt) => opt.id === +e.target.value
            );
            if (selectedOption) handleSelect(selectedOption);
          }}
          className="p-2 border border-gray-300 rounded-md"
        >
          <option value="">Выберите {placeholder}</option>
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.value}
            </option>
          ))}
        </select>
      )}
      {errors[name] && (
        <span className="text-red-500 text-sm">{errors[name]?.message}</span>
      )}
    </div>
  );
};

export default MultiSelect;
