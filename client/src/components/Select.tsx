import PlusBtnSvg from "@/assets/svg/plus-btn.svg";
import { useRef, useState } from "react";
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useDismiss,
  useRole,
  useClick,
  useInteractions,
  FloatingFocusManager,
  useId,
} from "@floating-ui/react";
import clsx from "clsx";
import { IFilterValue } from "@/types/filters";

export const Select = ({
  value,
  options,
  placeholder,
  onChange,
}: {
  value?: IFilterValue;
  options: IFilterValue[];
  placeholder?: string;
  onChange?: (value: IFilterValue) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: "bottom-start",
    middleware: [
      offset(10),
      flip({ fallbackAxisSideDirection: "end" }),
      shift(),
    ],
    whileElementsMounted: autoUpdate,
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role,
  ]);

  const selectValue = (value: IFilterValue) => {
    onChange?.(value);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        ref={refs.setReference}
        {...getReferenceProps()}
        type="button"
        className="flex items-center gap-1"
      >
        <div className="text-neutral-950 text-center leading-6">
          {value ? value.value : placeholder}
        </div>
        <img src={PlusBtnSvg} alt="plus-btn" />
      </button>
      {isOpen && (
        <FloatingFocusManager context={context} modal={false}>
          <div
            ref={refs.setFloating}
            style={floatingStyles}
            className={clsx(
              "flex z-10 flex-col items-start gap-1 rounded-2x top-full bg-white py-6 shadow-md rounded-md max-h-[10rem] overflow-auto w-max"
            )}
          >
            {options.map((item) => (
              <button
                onClick={() => selectValue(item)}
                key={item.id}
                className="flex items-center gap-1 px-8 py-4 hover:bg-[#eee] cursor-pointer w-full select-none"
              >
                <div className="text-neutral-950">{item.value}</div>
              </button>
            ))}
          </div>
        </FloatingFocusManager>
      )}
    </div>
  );
};
