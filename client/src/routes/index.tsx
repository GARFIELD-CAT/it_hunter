import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Vacancies from '@/pages/Vacancies/Vacancies';
import Companies from '@/pages/Companies/Companies';
import Header from '@/components/Header';
import { Vacancy } from '@/pages/Vacancy/Vacancy';
import { Company } from '@/pages/Company/Company';

const Router = () => (
  <BrowserRouter>
    <div className="h-screen flex flex-col items-stretch w-full">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vacancies" element={<Vacancies />} />
        <Route path="vacancy/:id" element={<Vacancy />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/company/:id" element={<Company />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default Router;
