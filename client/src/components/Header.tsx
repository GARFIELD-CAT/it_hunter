import Button from '@/components/Button';
import useAuthStore from '@/store/useAuthStore';

import Logo from '@/assets/svg/logo.svg';
import { NavLink } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';

const Header = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuthStore(
    (state) => state
  );

  return (
    <nav>
      <div className="flex justify-between items-center self-stretch py-4 px-12">
        <div className="flex items-center gap-12">
          <img className="w-[10.125rem] h-[1.875rem] " src={Logo} />
          <div className="flex items-center">
            <div className="flex flex-col items-start text-neutral-950  text-[.9375rem] leading-6">
              Компании
            </div>
            <div className="flex flex-col items-start pl-8 text-neutral-950  leading-6">
              Вакансии
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-12">
          <div className="flex items-center">
            <div className="flex flex-col items-start text-neutral-950  leading-6">
              Создать резюме
            </div>
            <div className="flex flex-col items-start pl-8 text-neutral-950  text-[.9375rem] leading-6">
              Работодателям
            </div>
          </div>
          <button className="flex justify-center items-center self-stretch py-2 px-4 w-[5.0625rem] rounded-md bg-black text-white cursor-pointer leading-6 hover:opacity-50 transition-opacity">
            Войти
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
