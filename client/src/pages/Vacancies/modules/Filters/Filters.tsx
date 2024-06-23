import { Select } from "@/components/Select";
import { Switcher } from "@/components/Switcher";
import { useEffect, useState } from "react";
import { useGlobalVacanciesQuery } from "../../useVacancies";
import { useFiltersQuery } from "@/services/queries/filters.query";
import { useVacanciesStore } from "../../store";
import { IFilterValue } from "@/types/filters";

function findOption(options?: IFilterValue[], value?: string) {
  if (!options) return;
  return options.find((option) => option.value === value);
}

export const Filters = () => {
  const [showOnlyStartups, setShowOnlyStartups] = useState(false);
  const { data } = useFiltersQuery();

  const { params, setParams, resetParamsWithoutResetPage } =
    useVacanciesStore();

  useEffect(() => {
    setParams({
      startup: showOnlyStartups ? true : undefined,
    });
  }, [showOnlyStartups]);

  function resetAllFilters() {
    resetParamsWithoutResetPage();
    setShowOnlyStartups(false);
  }

  return (
    <div className="flex min-w-[24rem] flex-col items-start gap-4 p-8 rounded-3xl bg-white sticky top-4">
      <div className="flex flex-col items-start text-neutral-950 text-2xl leading-9">
        Фильтры
      </div>
      <div className="flex flex-col items-start gap-4 self-stretch">
        <div className="flex flex-col items-start gap-1 self-stretch">
          <div className="flex flex-col items-start text-[#808080] text-sm leading-[1.3125rem]">
            Локация:
          </div>
          <Select
            value={findOption(data?.locations, params.locations)}
            placeholder="Выберите локацию"
            options={data?.locations ?? []}
            onChange={(value) =>
              setParams({
                locations: value?.value,
              })
            }
          />
        </div>
        <div className="flex flex-col items-start gap-1 self-stretch">
          <div className="flex flex-col items-start text-[#808080] text-sm leading-[1.3125rem]">
            Сфера:
          </div>
          <Select
            value={findOption(data?.tags, params.tags)}
            options={data?.tags ?? []}
            placeholder="Выберите сферу"
            onChange={(value) =>
              setParams({
                tags: value?.value,
              })
            }
          />
        </div>
        {/* <div className="flex flex-col items-start gap-1 self-stretch">
          <div className="flex flex-col items-start text-[#808080] text-sm leading-[1.3125rem]">
            Формат работы:
          </div>
          <Select
            options={data?.employmentTypes ?? []}
            placeholder="Выберите формат"
          />
        </div> */}
        <div className="flex flex-col items-start gap-1 self-stretch">
          <div className="flex flex-col items-start text-[#808080] text-sm leading-[1.3125rem]">
            График:
          </div>
          <Select
            value={findOption(data?.schedules, params.schedules)}
            options={data?.schedules ?? []}
            placeholder="Выберите график"
            onChange={(value) => {
              setParams({
                schedules: value?.value,
              });
            }}
          />
        </div>
        {/* <div className="flex flex-col items-start gap-1 self-stretch">
          <div className="flex flex-col items-start text-[#808080] text-sm leading-[1.3125rem]">
            Опыт работы:
          </div>
          <Select
            options={data?.experiences ?? []}
            placeholder="Выберите опыт"
          />
        </div> */}
      </div>
      <div className="flex items-center self-stretch">
        <Switcher
          value={!!showOnlyStartups}
          toggle={() => setShowOnlyStartups(!showOnlyStartups)}
        />
        <div className="flex flex-col items-start pl-3 text-neutral-950 leading-6">
          Только стартапы
        </div>
      </div>
      <div className="flex flex-col items-start min-w-[10rem] text-[#939393] text-sm leading-[1.125rem]">
        Найдена 241 вакансия
      </div>
      <button
        onClick={resetAllFilters}
        className="flex items-center justify-center w-full py-2 rounded-full bg-neutral-950 text-white text-sm leading-6"
      >
        Сбросить фильтры
      </button>
    </div>
  );
};
