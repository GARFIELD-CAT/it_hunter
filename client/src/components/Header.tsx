import useAuthStore from "@/store/useAuthStore";

import Logo from "@/assets/svg/logo.svg";
import { Link, useNavigate } from "react-router-dom";

import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useDismiss,
  useRole,
  useClick,
  useInteractions,
  FloatingFocusManager,
  useId,
} from "@floating-ui/react";
import { useState } from "react";

import SignOut from "@/assets/svg/sign-out.svg";
import Folder from "@/assets/svg/folder.svg";
import Document from "@/assets/svg/document.svg";

const Header = () => {
  const { isAuthenticated, logout } = useAuthStore((state) => state);
  const navigate = useNavigate();
  console.log("🚀 ~ Header ~ isAuthenticated:", isAuthenticated);

  const handleLogOutClick = () => {
    logout();
    navigate("/");
  };

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
            <Link
              to="/create-vacancy"
              className="font-medium text-neutral-950 leading-6 cursor-pointer"
            >
              Создать вакансию
            </Link>
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
              <AccountBtn />
              {/* <button
                onClick={logout}
                className="flex justify-center items-center self-stretch py-2 px-4 w-[5.0625rem] rounded-md bg-black text-white cursor-pointer leading-6 hover:opacity-50 transition-opacity"
              >
                Выйти
              </button> */}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

const AccountBtn = () => {
  const { logout } = useAuthStore((state) => state);

  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: "bottom-end",
    middleware: [
      offset(10),
      flip({ fallbackAxisSideDirection: "end" }),
      shift(),
    ],
    whileElementsMounted: autoUpdate,
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role,
  ]);

  return (
    <>
      <button ref={refs.setReference} {...getReferenceProps()} type="button">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjTMVi5RXHTZRVlGD7EnaUgzXow8h-nfvg5A&s"
          className="w-10 h-10 rounded-full object-cover object-center"
        />
      </button>
      {isOpen && (
        <FloatingFocusManager context={context} modal={false}>
          <div
            ref={refs.setFloating}
            style={floatingStyles}
            className="flex z-10 flex-col items-stretch rounded-2x py-2 top-full bg-white shadow-md rounded-md max-h-[10rem] overflow-auto min-w-[12rem] text-left"
            {...getFloatingProps()}
          >
            <button
              onClick={() => console.log("Profile")}
              className="py-1 w-full  text-left px-8 flex items-center gap-2 cursor-default opacity-30"
            >
              <img src={Folder} className="w-4 h-4" />
              Мои Вакансии
            </button>
            <Link
              to="/my-company"
              className="py-1 w-full hover:bg-gray-100  text-left px-8 flex items-center gap-2"
            >
              <img src={Document} className="w-4 h-4" />
              Моя Компания
            </Link>
            <button
              onClick={logout}
              className="py-2 mt-2 w-full border-t border-gray-300 hover:bg-gray-100 text-left px-8 flex items-center gap-2"
            >
              <img src={SignOut} className="w-4 h-4" />
              Выйти
            </button>
          </div>
        </FloatingFocusManager>
      )}
    </>
  );
};

export default Header;
