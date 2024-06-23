import { VacancyCard } from "@/components/VacancyCard";
import { useGlobalVacanciesQuery } from "../../useVacancies";
import { shortString } from "@/lib/helper";

export const VacanciesList = ({ className }: { className?: string }) => {
  const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } =
    useGlobalVacanciesQuery();

  if (isFetching && !data) {
    return (
      <div className="flex justify-center items-center w-full h-[50vh]">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-neutral-950"></div>
      </div>
    );
  }

  return (
    <>
      <div className="mt-6 flex flex-col items-stretch gap-6 w-full">
        {data?.pages
          .map((page) => page.results)
          .flat()
          .map((vacancy) => (
            <VacancyCard
              to={`/vacancy/${vacancy.id}`}
              key={vacancy.id}
              companyLogoSrc={vacancy.employer.logo}
              companyName={vacancy.name}
              description={shortString(vacancy.description ?? "", 150)}
              skills={vacancy.tags.map((tag) => tag.value)}
              city={vacancy.locations[0].value}
              salary={vacancy.salary}
            />
          ))}
      </div>
      {hasNextPage && (
        <button
          onClick={() => fetchNextPage()}
          className="inline-flex mx-auto justify-center items-center pt-[1.4375rem] pb-6 px-24 rounded-full bg-white mt-12 text-neutral-950 text-center  text-[1.75rem] leading-7"
        >
          {isFetchingNextPage ? (
            <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-neutral-950"></div>
          ) : (
            "Показать еще"
          )}
        </button>
      )}
    </>
  );
};
