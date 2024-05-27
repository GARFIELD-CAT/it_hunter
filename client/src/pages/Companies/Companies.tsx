import { Container } from '@/components/Container';

import { Footer } from '@/components/Footer';
import { Search } from '@/components/Search/Search';
import { CompaniesList } from './modules/CompaniesList/CompaniesList';

const Companies = () => {
  return (
    <div className="flex flex-1 flex-col justify-between items-start">
      <Container className="mt-8 w-full h-full">
        <h1 className="text-[2.45119rem] text-left font-normal leading-[2.75rem]">
          Компании
        </h1>
        <Search className="py-[.75rem] mt-6" />
        <CompaniesList className="mt-6" />
      </Container>
      <Footer className="mt-[8rem]" />
    </div>
  );
};

export default Companies;
