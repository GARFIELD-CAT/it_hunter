import { Container } from '@/components/Container';
import { Footer } from '@/components/Footer';
import type { IVacancy } from '@/types/vacancy';
import { useNavigate } from 'react-router';

const MOCK_VACANCY: IVacancy = {
  id: 66,
  name: 'Младший маркетолог в digital- агентство (junior интернет-маркетолог)',
  published_at: '2024-06-03T19:04:39.061000Z',
  created_at: '2024-06-03T19:04:39.061000Z',
  locations: [
    { id: 17, name: 'msk', value: 'Москва' },
    { id: 18, name: 'yerevan', value: 'Ереван' },
  ],
  salary: { currency: 'RUR', id: 145, to: 123413, value: 'Рубли', _from: 100 },
  type: { id: 7, name: 'open', value: 'Открытая' },
  archived: false,
  url: '',
  employer: {
    email: 'densis@yandex.ru',
    first_name: 'Ягунов',
    id: 2,
    last_name: 'Денис',
    username: 'denissya',
  },
  schedule: { id: 20, name: 'flexible', value: 'Гибкий график' },
  employment: { id: 8, name: 'full', value: 'Полная занятость' },
  experience: { id: 10, name: 'moreThan6', value: 'Более 6 лет' },
  snippet: '',
  tags: [
    { id: 5, name: 'anlt', value: 'Маркетинг' },
    { id: 4, name: 'dev', value: 'Реклама' },
  ],
  description: `Ищем талантливого специалиста junior уровня. Внимательного, ответственного, с щепоткой здорового перфекционизма.
Опыт не так важен. Главное — желание развиваться!

Привет, меня зовут Владимир Малюгин. Я руководитель Geeks — команда профи в performance-маркетинге. Знаем все о продвижении недвижимости и медицины.
Приглашаю стать частью нашей команды!

Если вы:
Креативны, инициативны и готовы самостоятельно принимать решения, создавать инфоповоды и генерировать идеи для продвижения;
Внимательны, пунктуальны и аккуратны во всём;
Комфортно работаете в режиме многозадачности;
Умеете договориться с любым человеком на выгодных условиях;
Грамотно говорите/пишете на русском языке;
Знаете базовые инструменты интернет-маркетинга и (в идеале) владеете ими;
Следите за работой топовых агентств, изучаете кейсы, по-настоящему интересуетесь рекламным рынком;
Быстро обучаетесь новому и хотите активно развиваться и расти.

В команде опытных коллег вы будете:
Создавать стабильный поток целевых лидов и анализировать эффективность источников их привлечения;
Привлекать трафик с помощью рекламы, SEO, видео-контента и т.д.;
Управлять email- и контент-маркетингом;
Генерить идеи для постов, статей, лидмагнитов и придумывать СТА;
Наполнять сайт, вести блог и придумывать конверсионные воронки;
Обеспечивать присутствие спикеров агентства в отраслевых конференциях;
Вести отчетность и анализировать результаты;
Много учиться и быть в курсе новых сервисов и технологий.

Мы предложим вам:
Наставника — маркетолога с 16-ти летним опытом (предыдущие ученики теперь работают в Яндексе, Сколково, Тануки и т.д.);
Прозрачную, понятную и всегда своевременную оплату труда;
Удаленную работу. Можно работать из любой точки мира. В нашей команде работают ребята из нескольких стран;
Гибкий график. Не обязательно быть за компьютером строго с 9 до 18. Главное оставаться на связи в рабочее время. Есть задачи, есть сроки, а дальше планируете время самостоятельно;
Крупных клиентов и возможность «прокачать» свои навыки в составе экспертной команды;
Постоянное развитие и участие в крутых проектах;

Карьерный рост. Мы ищем человека, который сначала сам всему научится, а потом будет управлять командой и подрядчиками.

В сопроводительном письме напишите, на какие каналы о digital-маркетинге вы подписаны или какие ресурсы читаете.`,
};

export const Vacancy = () => {
  const navigate = useNavigate();

  const vacancy = MOCK_VACANCY;

  const {
    name,
    description,
    tags,
    locations,
    schedule,
    employment,
    experience,
  } = vacancy;

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-1 flex-col justify-between items-start">
      <Container className="flex flex-col gap-5 items-start pb-16 w-full max-w-[1184px]">
        <div className="header-block bg-white rounded-3xl py-2 px-6 flex shrink items-center h-16 w-full">
          <button
            className="flex flex-col items-start p-2 justify-center"
            onClick={handleBackButtonClick}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28 16C28 16.2708 27.901 16.5052 27.7031 16.7031C27.5052 16.901 27.2708 17 27 17H7.40625L14.7188 24.2812C14.8021 24.3854 14.8698 24.4948 14.9219 24.6094C14.974 24.724 15 24.8542 15 25C15 25.2708 14.901 25.5052 14.7031 25.7031C14.5052 25.901 14.2708 26 14 26C13.8542 26 13.724 25.974 13.6094 25.9219C13.4948 25.8698 13.3854 25.8021 13.2812 25.7188L4.28125 16.7188C4.19792 16.6146 4.13021 16.5052 4.07812 16.3906C4.02604 16.276 4 16.1458 4 16C4 15.8542 4.02604 15.724 4.07812 15.6094C4.13021 15.4948 4.19792 15.3854 4.28125 15.2812L13.2812 6.28125C13.3854 6.19792 13.4948 6.13021 13.6094 6.07812C13.724 6.02604 13.8542 6 14 6C14.2708 6 14.5052 6.09896 14.7031 6.29688C14.901 6.49479 15 6.72917 15 7C15 7.14583 14.974 7.27604 14.9219 7.39062C14.8698 7.50521 14.8021 7.61458 14.7188 7.71875L7.40625 15H27C27.2708 15 27.5052 15.099 27.7031 15.2969C27.901 15.4948 28 15.7292 28 16Z"
                fill="#0A0A0A"
              />
            </svg>
          </button>
          <div className="w-px h-10 bg-gray-300" />
          <div className="flex flex-col items-start pl-6">
            <div className="bg-neutral-200 text-neutral-950 text-sm leading-[14px] py-1 px-2 rounded">
              Вакансия
            </div>
          </div>
          <div className="flex flex-col items-start pl-6 text-gray-500 text-sm leading-[1.3125rem]">
            Опубликована 20 апреля 2024
          </div>
        </div>

        <div className="flex lg:flex-row flex-col-reverse items-center lg:items-start justify-center gap-5 w-full">
          <div className="left-block flex flex-col lg:basis-4/12">
            <div className="company-information-block flex flex-col min-w-96 w-full">
              <div className="bg-white p-6 rounded-3xl">
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-cover rounded-full"></div>
                  {/* style="background-image: url(<path-to-image>);" */}
                  <div className="pl-4 text-neutral-950 text-xl">
                    Digital Geeks
                  </div>
                </div>
                <div className="h-18">
                  <div className="text-neutral-950 text-[.9375rem] leading-6">
                    Digital Geeks — агентство performance-маркетинга и
                    интегратора digital-решений. Мы по-...
                  </div>
                  <div className="text-neutral-950 text-[.9375rem] leading-6">
                    Читать дальше ↓
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-start">
                    <div className="text-neutral-950 leading-6">Секторы:</div>
                    <div className="pl-3">
                      <div className="text-neutral-950 leading-6">
                        Агентство
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start mt-2">
                    <div className="text-neutral-950 text-[.9375rem] leading-6">
                      Сотрудники:
                    </div>
                    <div className="pl-3">
                      <div className="text-neutral-950 text-center text-[.9375rem] leading-6">
                        до 15 человек
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start mt-2">
                    <div className="text-neutral-950 text-[.9375rem] leading-6">
                      Локации:
                    </div>
                    <div className="pl-3">
                      <div className="text-neutral-950 leading-6">Москва</div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div className="flex items-start">
                    <div className="text-neutral-950 text-[.9375rem] leading-6">
                      Digital Geeks
                    </div>
                  </div>
                  <div className="p-1 w-8 h-8 bg-neutral-200 rounded-lg flex justify-center items-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_6_991)">
                        <path
                          d="M3.75 12H20.25"
                          stroke="black"
                          stroke-width="1.125"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M13.5 5.25L20.25 12L13.5 18.75"
                          stroke="black"
                          stroke-width="1.125"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_6_991">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="vacancy-conditions-block mt-6  bg-white p-8 rounded-3xl">
                <div className="text-gray-500 text-[.8125rem] leading-[1.3125rem]">
                  Локация:
                </div>
                <div className="text-neutral-950 text-xs leading-6">
                  {locations.map(({ value }) => (
                    <span className="text-neutral-950 text-[.9375rem] leading-6">
                      {`${value} `}
                    </span>
                  ))}
                </div>
                <div className="mt-4 text-gray-500 text-[.8125rem] leading-[1.3125rem]">
                  Занятость / Тип договора:
                </div>
                <div className="flex items-center">
                  <div className="text-neutral-950 text-[.9375rem] leading-6">
                    {`${employment.value} / ${schedule.value}`}
                  </div>
                </div>
                <div className="mt-4 text-gray-500 text-[.8125rem] leading-[1.3125rem]">
                  Опыт:
                </div>
                <div className="text-neutral-950 text-[.9375rem] leading-6">
                  {experience.value}
                </div>
                <div className="mt-4 text-gray-500 text-[.8125rem] leading-[1.3125rem]">
                  Зарплата:
                </div>
                <div className="text-neutral-950 text-xs leading-6">—</div>
              </div>

              <div className="response-block mt-6 bg-white p-6 rounded-3xl">
                <div className="text-neutral-950 text-[.9375rem] leading-6">
                  Чтобы откликнуться на вакансию, нужно зарегистрироваться.
                </div>
                <div className="mt-4 flex justify-center">
                  <button className="bg-black text-white text-[1.0625rem] leading-6 py-3 px-20 rounded-md">
                    Зарегистрироваться
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="vacancy-description-block flex justify-center shrink lg:basis-8/12 min-w-96 w-full">
            <div className="bg-white rounded-3xl p-6">
              <div className="flex items-center pb-2">
                {tags.map(({ value }) => (
                  <div className="flex flex-col items-start pt-0 pb-2 pl-0 pr-2 max-w-[19.25rem]">
                    <div className="flex flex-col items-start py-1 px-2 max-w-[18.75rem] rounded bg-neutral-200 text-neutral-950 text-sm leading-[0.875rem]">
                      {value}
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-neutral-950 text-5xl leading-[48px] mb-5">
                {name}
              </div>
              <div className="space-y-6 text-neutral-950 text-sm leading-6 whitespace-pre-wrap">
                {description}
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};
