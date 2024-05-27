import { Container } from '@/components/Container';

export const Vacancy = () => (
  <Container>
    <div className="flex flex-col items-start pb-16 w-[1184px] max-w-[1184px]">
      <div className="flex flex-col items-start gap-6 self-stretch">
        <div className="flex items-center self-stretch py-2 px-6 h-16 rounded-3xl bg-white">
          <div className="flex items-center">
            <div className="flex justify-center items-center p-2">
              <div className="flex items-start">
                <div className="flex flex-col items-start self-stretch">
                  <svg
                    width={32}
                    height={32}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M28 16C28 16.2708 27.901 16.5052 27.7031 16.7031C27.5052 16.901 27.2708 17 27 17H7.40625L14.7188 24.2812C14.8021 24.3854 14.8698 24.4948 14.9219 24.6094C14.974 24.724 15 24.8542 15 25C15 25.2708 14.901 25.5052 14.7031 25.7031C14.5052 25.901 14.2708 26 14 26C13.8542 26 13.724 25.974 13.6094 25.9219C13.4948 25.8698 13.3854 25.8021 13.2812 25.7188L4.28125 16.7188C4.19792 16.6146 4.13021 16.5052 4.07812 16.3906C4.02604 16.276 4 16.1458 4 16C4 15.8542 4.02604 15.724 4.07812 15.6094C4.13021 15.4948 4.19792 15.3854 4.28125 15.2812L13.2812 6.28125C13.3854 6.19792 13.4948 6.13021 13.6094 6.07812C13.724 6.02604 13.8542 6 14 6C14.2708 6 14.5052 6.09896 14.7031 6.29688C14.901 6.49479 15 6.72917 15 7C15 7.14583 14.974 7.27604 14.9219 7.39062C14.8698 7.50521 14.8021 7.61458 14.7188 7.71875L7.40625 15H27C27.2708 15 27.5052 15.099 27.7031 15.2969C27.901 15.4948 28 15.7292 28 16Z"
                      fill="#0A0A0A"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start pl-6 w-[1.5625rem] h-10">
              <div className="flex-shrink-0 w-px h-10 bg-[#ccc]" />
            </div>
            <div className="flex flex-col items-start pl-6">
              <div className="flex flex-col items-start py-1 px-2 rounded bg-neutral-200 text-neutral-950  text-sm leading-[14px]">
                Вакансия
              </div>
            </div>
            <div className="flex flex-col items-start pl-6 text-[#808080]  text-sm leading-[1.3125rem]">
              Опубликована 20 апреля 2024
            </div>
          </div>
        </div>
        <div className="flex items-start self-stretch">
          <div className="flex flex-col items-start gap-6 self-stretch pb-[1054px] w-96">
            <div className="flex flex-col items-start self-stretch">
              <div className="flex flex-col items-start w-96">
                <div className="flex flex-col items-start gap-6 self-stretch p-6 rounded-3xl bg-white">
                  <div className="flex items-center self-stretch">
                    <div className="lightgray 0px 0px / 100% 100% no-repeat] w-14 h-14 max-w-[21rem] rounded-full bg-[url(<path-to-image>)"></div>
                    <div className="flex flex-col items-start pl-4 text-neutral-950  text-xl leading-[1.625rem]">
                      Digital Geeks
                    </div>
                  </div>
                  <div className="self-stretch h-[4.5rem]">
                    <div className="flex flex-col flex-shrink-0 justify-center w-[19.1875rem] h-[4.5rem] text-neutral-950  text-[.9375rem] leading-6">
                      Digital Geeks — агентство performance-маркетинга и
                      интегратора digital-решений. Мы по-...{' '}
                    </div>
                    <div className="link-1 flex flex-shrink-0 justify-center items-center w-[8.1875rem] h-[1.125rem] bg-white/0 flex flex-col flex-shrink-0 justify-center w-[8.25rem] h-6 text-neutral-950  leading-6">
                      Читать дальше ↓
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-2 self-stretch">
                    <div className="flex items-start self-stretch">
                      <div className="flex flex-col items-start self-stretch text-neutral-950  leading-6">
                        Секторы:
                      </div>
                      <div className="flex flex-col items-start pl-3">
                        <div className="flex justify-center items-start">
                          <div className="flex flex-col items-start text-neutral-950  leading-6">
                            Агентство
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start self-stretch">
                      <div className="flex flex-col items-start self-stretch text-neutral-950  text-[.9375rem] leading-6">
                        Сотрудники:
                      </div>
                      <div className="flex flex-col items-start pl-3">
                        <div className="flex justify-center items-start">
                          <div className="flex flex-col items-center text-neutral-950 text-center  text-[.9375rem] leading-6">
                            до 15 человек
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start self-stretch">
                      <div className="flex flex-col items-start self-stretch text-neutral-950  text-[.9375rem] leading-6">
                        Локации:
                      </div>
                      <div className="flex flex-col items-start pl-3">
                        <div className="flex justify-center items-start">
                          <div className="flex flex-col items-start text-neutral-950  leading-6">
                            Москва
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center self-stretch">
                    <div className="flex flex-wrap items-start pt-0 pb-1 pl-0 pr-4">
                      <div className="flex flex-col items-start self-stretch">
                        <div className="flex flex-col items-start self-stretch pt-[0.1875rem] pb-[0.1875rem] px-0">
                          <div className="button___link flex justify-center items-center w-[6.0625rem] h-[1.125rem] bg-white/0 flex flex-col flex-shrink-0 justify-center w-[6.125rem] h-6 text-neutral-950 text-center  text-[.9375rem] leading-6">
                            Digital Geeks
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center items-center p-1 w-8 h-8 rounded-lg bg-neutral-200">
                      <div className="flex-shrink-0 w-6 h-6">
                        <div className="flex flex-col flex-shrink-0 items-start w-6 h-6">
                          <div className="flex flex-col flex-shrink-0 items-start w-6 h-6">
                            <svg
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_6_991)">
                                <path
                                  d="M3.75 12H20.25"
                                  stroke="black"
                                  strokeWidth="1.125"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M13.5 5.25L20.25 12L13.5 18.75"
                                  stroke="black"
                                  strokeWidth="1.125"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_6_991">
                                  <rect width={24} height={24} fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                        </div>
                        <div className="flex-shrink-0 w-6 h-6 bg-neutral-950" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start self-stretch p-8 rounded-3xl bg-white">
              <div className="flex flex-col items-start gap-4 self-stretch">
                <div className="flex flex-col items-start gap-1 self-stretch">
                  <div className="flex flex-col items-start self-stretch self-stretch text-[#808080]  text-[.8125rem] leading-[1.3125rem]">
                    Локация:
                  </div>
                  <div className="flex flex-col items-start self-stretch">
                    <div className="flex justify-center items-start">
                      <div className="flex flex-col items-center text-neutral-950 text-center  text-xs leading-6">
                        —
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-1 self-stretch">
                  <div className="flex flex-col items-start self-stretch self-stretch text-[#808080]  text-[.8125rem] leading-[1.3125rem]">
                    Занятость / Тип договора:
                  </div>
                  <div className="flex items-center self-stretch">
                    <div className="flex flex-col items-start">
                      <div className="flex justify-center items-start">
                        <div className="flex flex-col items-center text-neutral-950 text-center  text-[.9375rem] leading-6">
                          Полный день
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start pl-2 text-neutral-950  leading-6">
                      /
                    </div>
                    <div className="flex flex-col items-start pl-2">
                      <div className="flex justify-center items-start">
                        <div className="flex flex-col items-center text-neutral-950 text-center  text-xs leading-6">
                          —
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-1 self-stretch">
                  <div className="flex flex-col items-start self-stretch self-stretch text-[#808080]  text-[.8125rem] leading-[1.3125rem]">
                    Опыт:
                  </div>
                  <div className="flex flex-col items-start self-stretch">
                    <div className="flex justify-center items-start">
                      <div className="flex flex-col items-center text-neutral-950 text-center  text-[.9375rem] leading-6">
                        От 1 месяца до года
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-1 self-stretch">
                  <div className="flex flex-col items-start self-stretch self-stretch text-[#808080]  text-[.8125rem] leading-[1.3125rem]">
                    Зарплата:
                  </div>
                  <div className="flex flex-col items-start self-stretch">
                    <div className="flex justify-center items-start">
                      <div className="flex flex-col items-center text-neutral-950 text-center  text-xs leading-6">
                        —
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="div_hidden-2 flex flex-col items-start gap-12 self-stretch p-6 rounded-3xl bg-white">
              <div className="flex flex-col items-start self-stretch self-stretch text-neutral-950  text-[.9375rem] leading-6">
                Чтобы откликнуться на вакансию, нужно зарегистрироваться.
              </div>
              <div className="flex justify-center items-center self-stretch pl-[5.3125rem] pr-[5.3125rem] p-3 h-12 rounded-md bg-black text-17 text-white text-center  leading-6">
                Зарегистрироваться
              </div>
            </div>
          </div>
          <div className="div_space-y-6_margin flex flex-col items-start pl-6">
            <div className="flex flex-col justify-center items-start self-stretch">
              <div className="self-stretch h-[1970px] rounded-3xl bg-white">
                <div className="flex flex-wrap items-center content-center pb-2 w-[680px]">
                  <div className="flex flex-col items-start py-1 px-2 max-w-[18.75rem] rounded bg-neutral-200 text-neutral-950  text-[.8125rem] leading-[14px]">
                    Маркетинг
                  </div>
                </div>
                <div className="flex flex-col items-start w-[680px] text-neutral-950  text-[2.5rem] leading-[48px]">
                  Младший маркетолог в digital- агентство (junior интернет-
                  маркетолог / менеджер по маркетингу и PR)
                </div>
                <div className="flex flex-col items-start gap-6 w-[680px]">
                  <div className="text-neutral-950  text-[.9375rem] leading-6">
                    Ищем талантливого специалиста junior уровня. Внимательного,
                    ответственного, с щепоткой здорового перфекционизма.
                  </div>
                  <div className="text-neutral-950  text-[.9375rem] leading-6">
                    Опыт не так важен. Главное — желание развиваться!
                  </div>
                </div>
                <div className="flex flex-col items-start pb-16 w-[680px]">
                  <div className="flex flex-col items-center self-stretch">
                    <div className="flex flex-col items-start w-[680px] max-w-[680px]">
                      <div className="flex flex-col items-start self-stretch py-3 px-0 self-stretch text-neutral-950  text-[.9375rem] leading-6">
                        Привет, меня зовут Владимир Малюгин. Я руководитель
                        Geeks —&nbsp;команда профи в performance-маркетинге.
                        Знаем все о продвижении недвижимости и медицины.
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center self-stretch">
                    <div className="flex flex-col items-start w-[680px] max-w-[680px]">
                      <div className="flex flex-col items-start self-stretch py-3 px-0 self-stretch text-neutral-950  text-[.9375rem] leading-6">
                        Приглашаю стать частью нашей команды!
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center self-stretch">
                    <div className="flex flex-col items-start w-[680px] max-w-[680px]">
                      <div className="flex flex-col items-start self-stretch py-3 px-0 self-stretch text-neutral-950  leading-6">
                        Если вы:
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center self-stretch">
                    <div className="flex flex-col items-start w-[680px] max-w-[680px]">
                      <div className="flex flex-col items-start self-stretch py-5 pl-8 pr-0">
                        <div className="flex flex-col items-start self-stretch p-1 self-stretch text-neutral-950  text-[.9375rem] leading-6">
                          Креативны, инициативны и готовы самостоятельно
                          принимать решения, создавать инфоповоды и генерировать
                          идеи для продвижения;
                        </div>
                        <div className="flex flex-col items-start self-stretch p-1 self-stretch text-neutral-950  text-[.9375rem] leading-6">
                          Внимательны, пунктуальны и аккуратны во всём;
                        </div>
                        <div className="flex flex-col items-start self-stretch p-1 self-stretch text-neutral-950  text-[.9375rem] leading-6">
                          Комфортно работаете в режиме многозадачности;
                        </div>
                        <div className="flex flex-col items-start self-stretch p-1 self-stretch text-neutral-950  text-[.9375rem] leading-6">
                          Умеете договориться с любым человеком на выгодных
                          условиях;
                        </div>
                        <div className="flex flex-col items-start self-stretch p-1 self-stretch text-neutral-950  text-[.9375rem] leading-6">
                          Грамотно говорите/пишете на русском языке;
                        </div>
                        <div className="flex flex-col items-start self-stretch p-1 self-stretch text-neutral-950  text-[.9375rem] leading-6">
                          Знаете базовые инструменты интернет-маркетинга и (в
                          идеале) владеете ими;
                        </div>
                        <div className="flex flex-col items-start self-stretch p-1 self-stretch text-neutral-950  text-[.9375rem] leading-6">
                          Следите за работой топовых агентств, изучаете кейсы,
                          по-настоящему интересуетесь рекламным рынком;
                        </div>
                        <div className="flex flex-col items-start self-stretch p-1 self-stretch text-neutral-950  text-[.9375rem] leading-6">
                          Быстро обучаетесь новому и хотите активно развиваться
                          и расти.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center self-stretch">
                    <div className="flex flex-col items-start w-[680px] max-w-[680px]">
                      <div className="flex flex-col items-start self-stretch py-3 px-0 self-stretch text-neutral-950  text-[.9375rem] leading-6">
                        В команде опытных коллег вы будете:
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center self-stretch">
                    <div className="flex flex-col items-start w-[680px] max-w-[680px]">
                      <div className="flex flex-col items-start self-stretch py-5 pl-8 pr-0">
                        <div className="flex flex-col items-start self-stretch p-1 self-stretch text-neutral-950  text-[.9375rem] leading-6">
                          Создавать стабильный поток целевых лидов и
                          анализировать эффективность источников их привлечения;
                        </div>
                        <div className="flex flex-col items-start self-stretch p-1 self-stretch text-neutral-950  text-[.9375rem] leading-6">
                          Привлекать трафик с помощью рекламы, SEO,
                          видео-контента и т.д.;
                        </div>
                        <div className="flex flex-col items-start self-stretch p-1 self-stretch text-neutral-950  text-[.9375rem] leading-6">
                          Управлять email- и контент-маркетингом;
                        </div>
                        <div className="flex flex-col items-start self-stretch p-1 self-stretch text-neutral-950  text-[.9375rem] leading-6">
                          Генерить идеи для постов, статей, лидмагнитов и
                          придумывать СТА;
                        </div>
                        <div className="flex flex-col items-start self-stretch p-1 self-stretch text-neutral-950  text-[.9375rem] leading-6">
                          Наполнять сайт, вести блог и придумывать конверсионные
                          воронки;
                        </div>
                        <div className="flex flex-col items-start self-stretch p-1 self-stretch text-neutral-950  text-[.9375rem] leading-6">
                          Обеспечивать присутствие спикеров агентства в
                          отраслевых конференциях;
                        </div>
                        <div className="flex flex-col items-start self-stretch p-1 self-stretch text-neutral-950  text-[.9375rem] leading-6">
                          Вести отчетность и анализировать результаты;
                        </div>
                        <div className="flex flex-col items-start self-stretch p-1 self-stretch text-neutral-950  text-[.9375rem] leading-6">
                          Много учиться и быть в курсе новых сервисов и
                          технологий.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center self-stretch">
                    <div className="flex flex-col items-start w-[680px] max-w-[680px]">
                      <div className="flex flex-col items-start self-stretch py-3 px-0 self-stretch text-neutral-950  text-[.9375rem] leading-6">
                        Мы предложим вам:
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center self-stretch">
                    <div className="flex flex-col items-start w-[680px] max-w-[680px]">
                      <div className="flex flex-col items-start self-stretch py-5 pl-8 pr-0">
                        <div className="flex flex-col items-start self-stretch p-1 self-stretch text-neutral-950  text-[.9375rem] leading-6">
                          Наставника — маркетолога с 16-ти летним опытом
                          (предыдущие ученики теперь работают в Яндексе,
                          Сколково, Тануки и т.д.);
                        </div>
                        <div className="flex flex-col items-start self-stretch p-1 self-stretch text-neutral-950  text-[.9375rem] leading-6">
                          Прозрачную, понятную и всегда своевременную оплату
                          труда;
                        </div>
                        <div className="flex flex-col items-start self-stretch p-1 self-stretch text-neutral-950  text-[.9375rem] leading-6">
                          Удаленную работу. Можно работать из любой точки мира.
                          В нашей команде работают ребята из нескольких стран;
                        </div>
                        <div className="flex flex-col items-start self-stretch p-1 self-stretch text-neutral-950  text-[.9375rem] leading-6">
                          Гибкий график. Не обязательно быть за компьютером
                          строго с 9 до 18. Главное оставаться на связи в
                          рабочее время. Есть задачи, есть сроки, а дальше
                          планируете время самостоятельно;
                        </div>
                        <div className="flex flex-col items-start self-stretch p-1 self-stretch text-neutral-950  text-[.9375rem] leading-6">
                          Крупных клиентов и возможность «прокачать» свои навыки
                          в составе экспертной команды;
                        </div>
                        <div className="flex flex-col items-start self-stretch p-1 self-stretch text-neutral-950  text-[.9375rem] leading-6">
                          Постоянное развитие и участие в крутых проектах;
                        </div>
                        <div className="flex flex-col items-start self-stretch p-1 self-stretch text-neutral-950  text-[.9375rem] leading-6">
                          Карьерный рост. Мы ищем человека, который сначала сам
                          всему научится, а потом будет управлять командой и
                          подрядчиками.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center self-stretch">
                    <div className="flex flex-col items-start w-[680px] max-w-[680px]">
                      <div className="flex flex-col items-start self-stretch py-3 px-0 self-stretch text-neutral-950  text-[.9375rem] leading-6">
                        ️ В сопроводительном письме напишите, какие на какие
                        каналы о digital-маркетинге вы подписаны или какие
                        ресурсы читаете.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
);
