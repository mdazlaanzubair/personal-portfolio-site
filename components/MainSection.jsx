import About from "./about/About";
import Hero from "./home/Hero";
import Service from "./services/Service";

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
