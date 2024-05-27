import { CompanyCard } from '@/components/CompanyCard';
import { ICompanyShort } from '@/types/company';
import clsx from 'clsx';

const MOCK_COMPANIES: Array<ICompanyShort> = [
  {
    id: '1',
    logo: 'https://tvsamara.ru/i/54/5468d1582d7f0bc5b39fb7197792923e.jpg',
    name: 'Сбербанк',
    description:
      'Крупнейший банк России, предоставляющий широкий спектр финансовых услуг для физических и юридических лиц.',
  },
  {
    id: '2',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Logo_Gazprom.svg/768px-Logo_Gazprom.svg.png',
    name: 'Газпром',
    description:
      'Одна из крупнейших энергетических компаний в мире, специализирующаяся на разведке, добыче, транспортировке и продаже газа.',
  },
  {
    id: '3',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Rosneft_Logo.svg/768px-Rosneft_Logo.svg.png',
    name: 'Роснефть',
    description:
      'Ведущая российская нефтяная компания, занимающаяся добычей, переработкой и сбытом нефти и газа.',
  },
  {
    id: '4',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Lukoil_logo.svg/800px-Lukoil_logo.svg.png',
    name: 'Лукойл',
    description:
      'Одна из крупнейших нефтяных компаний в России, занимающаяся добычей, переработкой и сбытом нефти и нефтепродуктов.',
  },
  {
    id: '5',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Russian_Railways_logo.svg/800px-Russian_Railways_logo.svg.png',
    name: 'РЖД',
    description:
      'Российские железные дороги – крупнейшая железнодорожная компания России, предоставляющая услуги по перевозке грузов и пассажиров.',
  },
  {
    id: '6',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Yandex_logo_en.svg/1024px-Yandex_logo_en.svg.png',
    name: 'Яндекс',
    description:
      'Крупнейшая российская IT-компания, предоставляющая услуги поиска, онлайн-рекламы, электронной коммерции и многое другое.',
  },
  {
    id: '7',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Logo_mail_ru_group.png/800px-Logo_mail_ru_group.png',
    name: 'Mail.ru Group',
    description:
      'Крупная российская интернет-компания, предлагающая разнообразные интернет-сервисы, включая социальные сети, почтовые услуги и игровые платформы.',
  },
  {
    id: '8',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/MTS_logo.png/800px-MTS_logo.png',
    name: 'МТС',
    description:
      'Ведущий российский оператор связи, предоставляющий услуги мобильной связи, интернета и телевидения.',
  },
  {
    id: '9',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Megafon_logo.png/800px-Megafon_logo.png',
    name: 'Мегафон',
    description:
      'Один из крупнейших операторов мобильной связи в России, предлагающий широкий спектр телекоммуникационных услуг.',
  },
  {
    id: '10',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Beeline_logo.png/800px-Beeline_logo.png',
    name: 'Билайн',
    description:
      'Крупный российский телекоммуникационный оператор, предоставляющий услуги мобильной связи и интернета.',
  },
  {
    id: '11',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Rosatom_logo.png/800px-Rosatom_logo.png',
    name: 'Росатом',
    description:
      'Российская государственная корпорация, занимающаяся развитием ядерной энергетики и предоставлением решений в области атомной промышленности.',
  },
  {
    id: '12',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/VK.com-logo.svg/800px-VK.com-logo.svg.png',
    name: 'ВКонтакте',
    description:
      'Крупнейшая российская социальная сеть, предлагающая пользователям возможность обмениваться сообщениями, фотографиями и видео.',
  },
  {
    id: '13',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tinkoff_Logo.png/800px-Tinkoff_Logo.png',
    name: 'Тинькофф',
    description:
      'Российский онлайн-банк, предлагающий широкий спектр финансовых услуг, включая кредитные и дебетовые карты, инвестиции и страхование.',
  },
  {
    id: '14',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/VTB_logo.svg/768px-VTB_logo.svg.png',
    name: 'ВТБ',
    description:
      'Один из крупнейших банков России, предоставляющий комплексные банковские услуги для физических и юридических лиц.',
  },
];

export const CompaniesList = ({ className }: { className?: string }) => {
  return (
    <div className={clsx('flex flex-col items-center', className)}>
      <div className="grid gap-12 grid-cols-2">
        {MOCK_COMPANIES.map((company) => (
          <CompanyCard
            to={`/company/${company.id}`}
            key={company.id}
            companyLogoSrc={company.logo}
            companyName={company.name}
            description={company.description}
          />
        ))}
      </div>
      <div className="inline-flex mx-auto justify-center items-center pt-[1.4375rem] pb-6 px-24 rounded-full bg-white mt-12">
        <div className="text-neutral-950 text-center font-['SansSerif'] text-[1.75rem] leading-7">
          Показать еще
        </div>
        <div className="flex justify-end items-center pl-1">
          <div className="flex flex-col items-center text-neutral-950 text-center font-['SansSerif'] text-sm leading-7">
            +231
          </div>
        </div>
      </div>
    </div>
  );
};
