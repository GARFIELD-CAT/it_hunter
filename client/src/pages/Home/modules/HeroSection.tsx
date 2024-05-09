const SECTIONS: Array<{
  BG: string;
  title: string;
  text: string;
}> = [
  {
    BG: './images/hero-section-bg-1.jpg',
    title: 'Вакансии',
    text: 'Изучай актуальные вакансии в ведущих компаниях',
  },
  {
    BG: './images/hero-section-bg-2.jpg',
    title: 'Компании',
    text: 'Место, где таланты выбирают команды',
  },
];

export const HeroSection = () => {
  return (
    <div className="flex gap-[3rem]">
      {SECTIONS.map((section) => (
        <div
          className="flex p-5 flex-col justify-end items-center flex-[1_0_0] self-stretch aspect-[35/23] rounded-3xl bg-cover cursor-pointer hover:transform hover:scale-105 transition-all hover:[box-shadow:0px_10px_10px_-5px_rgba(0,_0,_0,_0.04),_0px_20px_25px_-5px_rgba(0,_0,_0,_0.10)] "
          style={{
            backgroundImage: `url(${section.BG})`,
          }}
        >
          <div
            className="
          flex p-6 flex-col items-center gap-4 rounded-3xl bg-[#FFF] [box-shadow:0px_-10px_10px_-5px_rgba(0,_0,_0,_0.04),_0px_-20px_25px_-5px_rgba(0,_0,_0,_0.10)] text-center max-w-[20rem]"
          >
            <h3 className="text-[2.25rem] not-italic font-normal leading-[2.475rem]">
              {section.title}
            </h3>
            <p className="text-[0.96875rem] font-normal leading-[1.4rem]">
              {section.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
