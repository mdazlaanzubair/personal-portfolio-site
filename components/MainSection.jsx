import Hero from "./hero/Hero";
import About from "./about/About";
import Service from "./service/Service";
import Experience from "./experiance/Experience";
import Project from "./project/Project";
import ExperienceContextProvider from "@/context/ExperienceContext";
import ProjectContextProvider from "@/context/ProjectContext";
import Contact from "./contact/Contact";
import ServiceContextProvider from "@/context/ServiceContext";

const MainSection = () => {
  return (
    <div className="px-0 py-10 lg:px-10 lg:py-20">
      <Hero />

      <About />

      <ServiceContextProvider>
        <Service />
      </ServiceContextProvider>

      <ExperienceContextProvider>
        <Experience />
      </ExperienceContextProvider>

      <ProjectContextProvider>
        <Project />
      </ProjectContextProvider>

      <Contact />
    </div>
  );
};

export default MainSection;
