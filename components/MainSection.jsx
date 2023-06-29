import Hero from "./hero/Hero";
import About from "./about/About";
import Service from "./service/Service";
import Experience from "./experiance/Experience";
import Project from "./project/Project";
import ExperienceContextProvider from "@/app/context/ExperienceContext";
import ProjectContextProvider from "@/app/context/ProjectContext";
import Contact from "./contact/Contact";

const MainSection = () => {
  return (
    <>
      <Hero />
      <About />
      <Service />
      <ExperienceContextProvider>
        <Experience />
      </ExperienceContextProvider>
      <ProjectContextProvider>
        <Project />
      </ProjectContextProvider>
      <Contact />
    </>
  );
};

export default MainSection;
