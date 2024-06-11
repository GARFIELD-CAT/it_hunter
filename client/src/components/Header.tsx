import useAuthStore from "@/store/useAuthStore";

import Logo from "@/assets/svg/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuthStore(
    (state) => state
  );

  return (
    <nav>
      <div className="flex justify-between items-center self-stretch py-4 px-12">
        <div className="flex items-center gap-12">
          <Link to="/">
            <img className="w-[10.125rem] h-[1.875rem] " src={Logo} />
          </Link>
          <div className="flex items-center">
            <Link
              to="/companies"
              className="flex flex-col items-start text-neutral-950  text-[.9375rem] leading-6"
            >
              Компании
            </Link>
            <Link
              to="/vacancies"
              className="flex flex-col items-start pl-8 text-neutral-950  leading-6"
            >
              Вакансии
            </Link>
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
          {!isAuthenticated ? (
            <Link
              to="/login"
              className="flex justify-center items-center self-stretch py-2 px-4 w-[5.0625rem] rounded-md bg-black text-white cursor-pointer leading-6 hover:opacity-50 transition-opacity"
            >
              Войти
            </Link>
          ) : (
            <div className="flex items-center gap-4">
              <Link to="/profile">
                <img
                  src="https://randomuser.me/api/portraits/men/39.jpg"
                  className="w-10 h-10 rounded-full"
                />
              </Link>
              <button
                onClick={() => setIsAuthenticated(false)}
                className="flex justify-center items-center self-stretch py-2 px-4 w-[5.0625rem] rounded-md bg-black text-white cursor-pointer leading-6 hover:opacity-50 transition-opacity"
              >
                Выйти
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
