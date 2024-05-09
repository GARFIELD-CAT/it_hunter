import { Container } from '@/components/Container';
import {
  HeroSection,
  CompanySection,
  AddCompanyForm,
  VacanciesSection,
  SubscribeForm,
} from './modules';
import { Footer } from '@/components/Footer';

const Home = () => {
  return (
    <>
      <Container className="mt-[8.12rem] flex flex-col gap-[5.5rem]">
        <HeroSection />
        <CompanySection />
        <AddCompanyForm />
        <VacanciesSection />
        <SubscribeForm />
      </Container>
      <Footer className="mt-[8rem]" />
    </>
  );
};

export default Home;
