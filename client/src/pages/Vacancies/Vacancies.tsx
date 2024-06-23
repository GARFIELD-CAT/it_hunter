import { Container } from "@/components/Container";

import { Footer } from "@/components/Footer";
import { Filters } from "./modules/Filters/Filters";
import { Search } from "@/components/Search/Search";
import { VacanciesList } from "./modules/VacanciesList/VacanciesList";
import { useVacanciesStore } from "./store";

const Vacancies = () => {
  const { setParams } = useVacanciesStore();

  return (
    <div className="flex flex-1 flex-col justify-between items-start">
      <Container className="mt-8 w-full h-full">
        <h1 className="text-[2.45119rem] text-left font-normal leading-[2.75rem]">
          Вакансии
        </h1>
        <div className="flex items-start gap-6 mt-6">
          <Filters />
          <div className="flex flex-col items-center flex-1">
            <Search onInput={(value) => setParams({ description: value })} />
            <VacanciesList />
          </div>
        </div>
      </Container>
      <Footer className="mt-[8rem]" />
    </div>
  );
};

export default Vacancies;
