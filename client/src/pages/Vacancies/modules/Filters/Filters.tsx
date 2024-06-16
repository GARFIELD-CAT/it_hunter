import { Select } from "@/components/Select";
import { Switcher } from "@/components/Switcher";
import { useState } from "react";
import { useGlobalVacanciesQuery } from "../../useVacancies";

const MockLocations = ["Москва", "Санкт-Петербург"];
const MockSpheres = ["IT", "Маркетинг", "Продажи", "Дизайн", "Финансы"];

export const Filters = () => {
  const [showOnlyStartups, setShowOnlyStartups] = useState(true);

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
          <Select options={MockLocations} />
        </div>
        <div className="flex flex-col items-start gap-1 self-stretch">
          <div className="flex flex-col items-start text-[#808080] text-sm leading-[1.3125rem]">
            Сфера:
          </div>
          <Select options={MockSpheres} />
        </div>
      </div>
      <div className="flex items-center self-stretch">
        <Switcher
          value={showOnlyStartups}
          toggle={() => setShowOnlyStartups(!showOnlyStartups)}
        />
        <div className="flex flex-col items-start pl-3 text-neutral-950 leading-6">
          Только стартапы
        </div>
      </div>
      <div className="flex flex-col items-start min-w-[10rem] text-[#939393] text-sm leading-[1.125rem]">
        Найдена 241 вакансия
      </div>
    </div>
  );
};
