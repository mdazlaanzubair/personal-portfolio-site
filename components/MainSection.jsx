import About from "./About";
import Hero from "./Hero";
import Service from "./Service";

const MainSection = () => {
  return (
    <div className="relative flex-grow">
      <Hero />
      <About />
      <Service />
    </div>
  );
};

export default MainSection;
