import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Vacancies from "@/pages/Vacancies/Vacancies";
import Companies from "@/pages/Companies/Companies";
import Header from "@/components/Header";
import { Vacancy } from "@/pages/Vacancy/Vacancy";
import { Company } from "@/pages/Company/Company";
import Login from "@/pages/Login";
import { MyCompany } from "@/pages/MyCompany/MyCompany";
import { CreateVacancy } from "@/pages/CreateVacancy/CreateVacancy";

const Router = () => (
  <BrowserRouter>
    <div className="min-h-screen flex flex-col items-stretch w-full">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vacancies" element={<Vacancies />} />
        <Route path="vacancy/:id" element={<Vacancy />}>
          {/* <Route path="/edit" element={<CreateVacancy />} /> */}
        </Route>
        {/* <Route path="/create-vacancy" element={<CreateVacancy />} /> */}
        <Route path="/companies" element={<Companies />} />
        <Route path="/company/:id" element={<Company />} />
        <Route path="/company/new" element={<MyCompany />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="*"
          element={
            <div className="font-bold text-center m-auto flex flex-col">
              <b className="text-[14rem] leading-none">404</b>
              <span className="text-4xl ">СТРАНИЦА НЕ НАЙДЕНА</span>
              <span className="text-sm mt-4">или еще не создана</span>
            </div>
          }
        />
      </Routes>
    </div>
  </BrowserRouter>
);

export default Router;
