import { Container } from "@/components/Container";

import { Footer } from "@/components/Footer";
import { Search } from "@/components/Search/Search";
import { CompaniesList } from "./modules/CompaniesList/CompaniesList";
import { useCompaniesQuery } from "@/services/queries/companies.query";
import { useState } from "react";

const Companies = () => {
  const [search, setSearch] = useState("");

  const { data, hasNextPage, fetchNextPage } = useCompaniesQuery({
    name: search,
  });

  return (
    <div className="flex flex-1 flex-col justify-between items-start">
      <Container className="mt-8 w-full h-full">
        <h1 className="text-[2.45119rem] text-left font-normal leading-[2.75rem]">
          Компании
        </h1>
        <Search
          onInput={(value) => {
            setSearch(value);
          }}
          className="py-[.75rem] mt-6"
        />
        <div className="w-full flex flex-col items-center">
          <CompaniesList
            data={data?.pages.map((page) => page.results).flat() || []}
            className="mt-6"
          />
          {hasNextPage && (
            <div className="inline-flex mx-auto justify-center items-center pt-[1.4375rem] pb-6 px-24 rounded-full bg-white mt-12">
              <button
                onClick={() => fetchNextPage()}
                className="text-neutral-950 text-center  text-[1.75rem] leading-7"
              >
                Показать еще
              </button>
              <div className="flex justify-end items-center pl-1">
                <div className="flex flex-col items-center text-neutral-950 text-center  text-sm leading-7">
                  +231
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
      <Footer className="mt-[8rem]" />
    </div>
  );
};

export default Companies;
