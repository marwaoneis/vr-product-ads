import AboutSection from "../components/About/About";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import InterestForm from "../components/InterestForm/InterestForm";

const Landing = () => {
  return (
    <div>
      <Header />
      <Hero />
      <AboutSection />
      <InterestForm />
    </div>
  );
};

export default Landing;
