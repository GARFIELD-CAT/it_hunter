import clsx from "clsx";

export const Switcher = ({
  value,
  toggle,
}: {
  value: boolean;
  toggle: () => void;
}) => {
  return (
    <button
      onClick={toggle}
      className={clsx(
        "flex justify-start items-center pl-[0.1875rem] pr-[0.1875rem] p-0 w-10 h-5 rounded-full border border-neutral-950 cursor-pointer focus:outline focus:outline-4 transition-all outline-offset-2 outline-blue-200"
      )}
    >
      <div
        className={clsx(
          "flex flex-shrink-0 justify-center items-center w-4 h-4 rounded-full border border-neutral-950 transition-all",
          {
            "bg-neutral-950": value,
            "transform translate-x-full": value,
          }
        )}
      >
        {value ? (
          <div className="flex flex-col items-center text-center leading-6 select-none text-white">
            ✓
          </div>
        ) : null}
      </div>
    </button>
  );
};
