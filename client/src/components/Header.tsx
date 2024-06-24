import useAuthStore from "@/store/useAuthStore";

import Logo from "@/assets/svg/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const { isAuthenticated, logout } = useAuthStore((state) => state);
  console.log("🚀 ~ Header ~ isAuthenticated:", isAuthenticated);

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
              className="font-medium text-neutral-950 leading-6"
            >
              Компании
            </Link>
            <Link
              to="/vacancies"
              className="font-medium pl-8 text-neutral-950  leading-6"
            >
              Вакансии
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center gap-12">
          <div className="flex items-center">
            {/* пока скроем */}
            {/* <div className="font-medium text-neutral-950 leading-6">
              Создать резюме
            </div> */}
            {/* <div className="font-medium pl-8 text-neutral-950 leading-6">
              Работодателям
            </div> */}
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
              <Link to="/company/1">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjTMVi5RXHTZRVlGD7EnaUgzXow8h-nfvg5A&s"
                  className="w-10 h-10 rounded-full object-cover object-center"
                />
              </Link>
              <button
                onClick={logout}
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
