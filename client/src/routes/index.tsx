import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Vacancies from '@/pages/Vacancies/Vacancies';
import Companies from '@/pages/Companies/Companies';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vacancies" element={<Vacancies />} />
      <Route path="/companies" element={<Companies />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  </BrowserRouter>
);

export default Router;
