import About from "./about/About";
import Hero from "./home/Hero";

const MainSection = () => {
  return (
    <div className="relative flex-grow">
      <Hero />
      <About />
    </div>
  );
};

export default MainSection;
