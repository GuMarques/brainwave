import { Hero } from "./sections/Hero";
import { Header } from "./sections/Header";
import { Benefits } from "./sections/Benefits";
import { Services } from "./sections/Services";
import ButtonGradient from "./assets/svg/ButtonGradient";
import { Collaboration } from "./sections/Collaboration";
import { Pricing } from "./sections/Pricing";
import { Roadmap } from "./sections/Roadmap";
import { Footer } from "./sections/Footer";

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
