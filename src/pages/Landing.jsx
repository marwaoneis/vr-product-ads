import AboutSection from "../components/About/About";
import ContactComponent from "../components/ContactSection/ContactSection";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
// import InterestForm from "../components/InterestForm/InterestForm";
import TeamSection from "../components/TeamSection/TeamSection";

const Landing = () => {
  return (
    <div>
      <Header />
      <Hero />
      <AboutSection />
      {/* <InterestForm /> */}
      <TeamSection />
      <ContactComponent />
    </div>
  );
};

export default Landing;
