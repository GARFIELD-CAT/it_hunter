import { CompanyCard } from '@/components/CompanyCard';
import { VacancyCard } from '@/components/VacancyCard';
import { ICompanyShort } from '@/types/company';
import { Link } from 'react-router-dom';

const MOCK_COMPANIES: Array<ICompanyShort> = [
  {
    id: '1',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Sberbank_Logo.png/800px-Sberbank_Logo.png',
    name: 'Сбербанк',
    description:
      'Сбербанк ищет разработчика с опытом работы в банковской сфере. Необходимы навыки работы с большими данными и знание SQL.',
  },
  {
    id: '2',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Logo_Gazprom.svg/768px-Logo_Gazprom.svg.png',
    name: 'Газпром',
    description:
      'Газпром приглашает инженера по автоматизации процессов. Требуется знание SCADA-систем и опыт работы с промышленными контроллерами.',
  },
  {
    id: '3',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Rosneft_Logo.svg/768px-Rosneft_Logo.svg.png',
    name: 'Роснефть',
    description:
      'Роснефть ищет аналитика данных для работы с геологоразведкой. Необходимы навыки работы с геоинформационными системами и Python.',
  },
  {
    id: '4',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Lukoil_logo.svg/800px-Lukoil_logo.svg.png',
    name: 'Лукойл',
    description:
      'Лукойл приглашает на работу менеджера проектов с опытом в нефтегазовой отрасли. Требуется знание PMI и опыт управления большими командами.',
  },
  {
    id: '5',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Russian_Railways_logo.svg/800px-Russian_Railways_logo.svg.png',
    name: 'РЖД',
    description:
      'РЖД ищет специалиста по логистике для оптимизации грузоперевозок. Требуется опыт работы в транспортной компании и знание современных логистических систем.',
  },
  {
    id: '6',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Yandex_logo_en.svg/1024px-Yandex_logo_en.svg.png',
    name: 'Яндекс',
    description:
      'Яндекс ищет разработчика на Python для работы над новыми алгоритмами поиска. Требуется опыт работы с большими данными и машинным обучением.',
  },
  {
    id: '7',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Logo_mail_ru_group.png/800px-Logo_mail_ru_group.png',
    name: 'Mail.ru Group',
    description:
      'Mail.ru Group приглашает DevOps инженера для поддержки облачной инфраструктуры. Требуются навыки работы с Kubernetes и Docker.',
  },
  {
    id: '8',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/MTS_logo.png/800px-MTS_logo.png',
    name: 'МТС',
    description:
      'МТС ищет инженера по телекоммуникациям для разработки и поддержки сетевых решений. Требуется знание протоколов связи и опыт работы с оборудованием Cisco.',
  },
  {
    id: '9',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Megafon_logo.png/800px-Megafon_logo.png',
    name: 'Мегафон',
    description:
      'Мегафон приглашает специалиста по маркетингу для разработки и реализации рекламных кампаний. Требуется опыт работы в сфере маркетинга и знание современных digital-инструментов.',
  },
  {
    id: '10',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Beeline_logo.png/800px-Beeline_logo.png',
    name: 'Билайн',
    description:
      'Билайн ищет специалиста по поддержке клиентов для работы в колл-центре. Требуется отличное знание русского языка и навыки работы с CRM-системами.',
  },
  {
    id: '11',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Rosatom_logo.png/800px-Rosatom_logo.png',
    name: 'Росатом',
    description:
      'Росатом ищет инженера по ядерной безопасности для работы на атомных станциях. Требуется опыт работы в сфере ядерной энергетики и знание нормативной документации.',
  },
  {
    id: '12',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/VK.com-logo.svg/800px-VK.com-logo.svg.png',
    name: 'ВКонтакте',
    description:
      'ВКонтакте приглашает frontend-разработчика для работы над интерфейсами социальной сети. Требуется знание JavaScript, HTML, CSS и опыт работы с React.',
  },
  {
    id: '13',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tinkoff_Logo.png/800px-Tinkoff_Logo.png',
    name: 'Тинькофф',
    description:
      'Тинькофф ищет аналитика по работе с клиентами для анализа клиентских данных и разработки рекомендаций. Требуется знание SQL и опыт работы с BI-системами.',
  },
  {
    id: '14',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/VTB_logo.svg/768px-VTB_logo.svg.png',
    name: 'ВТБ',
    description:
      'ВТБ приглашает специалиста по финансовому анализу для работы с корпоративными клиентами. Требуется знание финансового анализа и опыт работы в банковской сфере.',
  },
];

export const VacanciesSection = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <div className="flex justify-between items-center">
        <h2 className="text-[2.45119rem] not-italic font-normal leading-[2.75rem]">
          Новые вакансии
        </h2>
        <Link
          to="/vacancies"
          className="text-[1rem] not-italic font-normal leading-6"
        >
          Смотреть все
        </Link>
      </div>
      <div className="grid gap-x-16 gap-y-12 grid-cols-2 mt-[3rem]">
        {MOCK_COMPANIES.map((company) => (
          <VacancyCard
            to={`/vacancy/${company.id}`}
            key={company.id}
            companyLogoSrc={company.logo}
            companyName={company.name}
            description={company.description}
          />
        ))}
      </div>
    </div>
  );
};
