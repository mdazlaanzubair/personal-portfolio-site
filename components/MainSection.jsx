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

      <div className="my-10"></div>

      <About />

      <div className="my-10"></div>

      <ServiceContextProvider>
        <Service />
      </ServiceContextProvider>

      <div className="my-10"></div>

      <ExperienceContextProvider>
        <Experience />
      </ExperienceContextProvider>

      <div className="my-10"></div>

      <ProjectContextProvider>
        <Project />
      </ProjectContextProvider>

      <div className="my-10"></div>

      <Contact />
    </div>
  );
};

export default MainSection;
