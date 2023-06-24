import Hero from "./Hero";
import About from "./About";
import Service from "./Service";
import Experience from "./Experience";

const MainSection = () => {
  return (
    <div className="relative flex-grow">
      <Hero />
      <About />
      <Experience />
      <Service />
    </div>
  );
};

export default MainSection;
