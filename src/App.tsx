import { Hero } from "./sections/Hero";
import { Header } from "./sections/Header";
import { Benefits } from "./sections/Benefits";
import ButtonGradient from "./assets/svg/ButtonGradient";

function App() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
