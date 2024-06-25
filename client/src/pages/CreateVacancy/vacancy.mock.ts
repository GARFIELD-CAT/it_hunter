import { IVacancy } from "@/types/vacancy";

export const MOCK_VACANCY: IVacancy = {
    id: 66,
    name: "Младший маркетолог в digital- агентство (junior интернет-маркетолог)",
    published_at: "2024-06-03T19:04:39.061000Z",
    created_at: "2024-06-03T19:04:39.061000Z",
    locations: [
      { id: 17, name: "msk", value: "Москва" },
      // { id: 18, name: "yerevan", value: "Ереван" },
      // { id: 17, name: "msk", value: "Москва" },
    ],
    salary: { currency: "RUR", id: 145, to: 0, value: "Рубли", _from: 0 },
    type: { id: 7, name: "open", value: "Открытая" },
    archived: false,
    url: "",
    employer: {
      email: "densis@yandex.ru",
      first_name: "Ягунов",
      id: 2,
      last_name: "Денис",
      username: "denissya",
    },
    schedule: { id: 20, name: "flexible", value: "Гибкий график" },
    employment: { id: 8, name: "full", value: "Полная занятость" },
    experience: { id: 10, name: "moreThan6", value: "Более 6 лет" },
    snippet: "",
    tags: [
      { id: 5, name: "anlt", value: "Маркетинг" },
      { id: 4, name: "dev", value: "Реклама" },
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