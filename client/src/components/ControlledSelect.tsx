import { useController } from "react-hook-form";
import { Select } from "./Select";

export const ControlledSelect = ({
  name,
  control,
  options,
  placeholder,
  onChange,
}: {
  name: string;
  control: any; // Replace 'any' with the appropriate type
  options: any[]; // Replace 'any' with the appropriate type
  placeholder: string;
  onChange?: (selectedValue: any) => void; // Replace 'any' with the appropriate type
}) => {
  const {
    field: { onChange: onControllerChange, value },
    fieldState: { error },
  } = useController({
    name,
    control,
  });
  console.log("🚀 ~ error:", error);

  const handleChange = (selectedValue: any) => {
    onControllerChange(selectedValue);
    if (onChange) {
      onChange(selectedValue);
    }
  };

  return (
    <div className="relative">
      <Select
        value={value}
        options={options}
        placeholder={placeholder}
        onChange={handleChange}
      />
      {error && <div className="text-red-500 text-sm">Нужно выбрать</div>}
    </div>
  );
};
