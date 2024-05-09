import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import PublicRoute from './PublicRoute';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
