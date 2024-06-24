import { useState } from "react";
import { RegisterForm } from "./modules/Register";
import { SignInForm } from "./modules/SignIn";

const Login = () => {
  const [mode, setMode] = useState<"login" | "register">("login");

  return (
    <div className="m-auto ">
      <div className="flex mb-4">
        <button
          onClick={() => setMode("login")}
          className={`text-2xl font-medium leading-7 ${
            mode === "login" ? "text-black" : "text-neutral-500"
          }`}
        >
          Вход
        </button>
        <span className="mx-4">/</span>
        <button
          onClick={() => setMode("register")}
          className={`text-2xl font-medium leading-7 ${
            mode === "register" ? "text-black" : "text-neutral-500"
          }`}
        >
          Регистрация
        </button>
      </div>
      {mode === "login" ? <SignInForm /> : <RegisterForm />}
    </div>
  );
};

export default Login;
