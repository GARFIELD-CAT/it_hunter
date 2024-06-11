import PlusBtnSvg from "@/assets/svg/plus-btn.svg";

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
            <div className="flex items-center gap-1">
              <div className="flex flex-col items-center text-neutral-950 text-center leading-6">
                Выбрать
              </div>
              <button>
                <img src={PlusBtnSvg} alt="plus-btn" />
              </button>
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
            <div className="flex items-center gap-1">
              <div className="flex flex-col items-center text-neutral-950 text-center leading-6">
                Выбрать
              </div>
              <button>
                <img src={PlusBtnSvg} alt="plus-btn" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex items-center self-stretch">
      <div className="flex items-center pl-[0.1875rem] pr-[0.1875rem] p-0 w-10 h-5 rounded-full border border-neutral-950">
        <div className="flex flex-shrink-0 justify-center items-center w-4 h-4 rounded-full border border-neutral-950">
          <div className="flex flex-col items-center text-center leading-6">
            ✓
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <button data-active="true" className="kit-switch kit-switch-sm">
          <div className="kit-switch-inner kit-switch-inner-sm"></div>
        </button>
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
