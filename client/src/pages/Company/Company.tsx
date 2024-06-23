import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { getLinkType } from "@/lib/helper";
import { useCompanyQuery } from "@/services/queries/company.query";
import { useParams } from "react-router";

export const Company = () => {
  const { id } = useParams();
  const { isLoading, data } = useCompanyQuery({ id });

  if (isLoading && !data) {
    return (
      <div className="flex justify-center items-center w-full h-[50vh]">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-neutral-950"></div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex justify-center text-5xl items-center w-full h-[50vh]">
        <p>Страница компании не найдена</p>
      </div>
    );
  }

  const {
    name,
    description,
    employees_number,
    links,
    locations,
    logo,
    profile_image,
    sector,
    snippet,
  } = data;

  return (
    <div className="flex flex-1 flex-col justify-between items-start">
      <Container className="flex flex-col items-center self-stretch pt-[6.5rem] pb-[6.5rem] pl-[23rem] pr-[23rem]">
        <div className="flex flex-col items-start w-auto max-w-[1184px]">
          <div className="flex flex-col items-start gap-12 self-stretch">
            <div className="div_hidden-uploadcare flex flex-col items-start self-stretch">
              {profile_image && (
                <img
                  src={profile_image}
                  className="object-cover object-center lightgray 0px -0.308px / 100% 100.217% no-repeat] self-stretch h-[17.75rem] max-w-[1184px] rounded-3xl"
                />
              )}
              <div className="self-stretch -mt-9 h-auto rounded-3xl bg-white py-12 px-16">
                <div className="flex items-start w-[1088px]">
                  <div className="div_w-full flex flex-col items-start gap-4 self-stretch pb-[1.3125rem]">
                    <span className="text-[2.5rem] font-medium leading-[56px]">
                      {name}
                    </span>
                    {snippet && (
                      <span className="whitespace-pre-wrap font-medium">
                        {snippet}
                      </span>
                    )}
                  </div>
                  {logo && (
                    <div className="flex flex-col flex-shrink-0 items-start pl-4 w-[8.25rem] h-[7.25rem]">
                      <img src={logo} />
                    </div>
                  )}
                </div>
                <div className="flex flex-col items-start gap-2 w-full">
                  <div className="flex items-start self-stretch">
                    <span className="leading-6">Секторы:</span>
                    {sector.map(({ id, value }) => (
                      <span key={id} className="font-medium pl-3 leading-6">
                        {value}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-start self-stretch">
                    <span className=" leading-6">Сотрудники:</span>
                    <span className="pl-3 text-center font-medium leading-6">
                      {employees_number.value}
                    </span>
                  </div>
                  <div className=" text-base flex items-start self-stretch ">
                    <span className="text-base leading-6">Локации:</span>
                    {locations.map(({ id, value }) => (
                      <span key={id} className="font-medium leading-6 pl-3">
                        {value}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-start w-full mt-8 flex gap-3 items-start px-0">
                  {links?.map(({ id, name }) => (
                    <a
                      key={id}
                      href={name}
                      className="font-medium underline h-6 text-center leading-6"
                    >
                      {getLinkType(name)}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-auto max-w-[1184px] p-16 rounded-3xl bg-white">
              <span className="text-base font-medium leading-6 whitespace-pre-wrap">
                {description}
              </span>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};
