export const Filters = () => (
  <div className="flex min-w-[24rem] flex-col items-start gap-4 p-8 rounded-3xl bg-white sticky top-4">
    <div className="flex flex-col items-start text-neutral-950 text-2xl leading-9">
      Фильтры
    </div>
    <div className="flex flex-col items-start gap-4 self-stretch">
      <div className="flex flex-col items-start gap-1 self-stretch">
        <div className="flex flex-col items-start text-[#808080] text-sm leading-[1.3125rem]">
          Локация:
        </div>
        <div className="flex flex-col items-start self-stretch">
          <div className="flex justify-center items-start">
            <div className="flex items-center">
              <div className="flex flex-col items-center text-neutral-950 text-center leading-6">
                Выбрать
              </div>
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_6_36)">
                  <path
                    d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
                    stroke="black"
                    strokeWidth="0.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.5 8H10.5"
                    stroke="black"
                    strokeWidth="0.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 5.5V10.5"
                    stroke="black"
                    strokeWidth="0.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_6_36">
                    <rect width={16} height={16} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start gap-1 self-stretch">
        <div className="flex flex-col items-start text-[#808080] text-sm leading-[1.3125rem]">
          Сфера:
        </div>
        <div className="flex flex-col items-start self-stretch">
          <div className="flex justify-center items-start">
            <div className="flex items-center">
              <div className="flex flex-col items-center text-neutral-950 text-center leading-6">
                Выбрать
              </div>
              <svg
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_6_55)">
                  <path
                    d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
                    stroke="black"
                    strokeWidth="0.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.5 8H10.5"
                    stroke="black"
                    strokeWidth="0.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 5.5V10.5"
                    stroke="black"
                    strokeWidth="0.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_6_55">
                    <rect width={16} height={16} fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex items-center self-stretch">
      <div className="flex items-center pl-[0.1875rem] pr-[0.1875rem] p-0 w-10 h-5 rounded-full border border-neutral-950">
        <div className="flex flex-shrink-0 justify-center items-center w-4 h-4 rounded-full border border-neutral-950">
          <div className="flex flex-col items-center text-center leading-6"></div>
        </div>
      </div>
      <div className="flex flex-col items-start pl-3 text-neutral-950 leading-6">
        Только стартапы
      </div>
    </div>
    <div className="flex flex-col items-start min-w-[10rem] text-[#939393] text-sm leading-[1.125rem]">
      Найдена 241 вакансия
    </div>
  </div>
);
