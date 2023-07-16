import Hero from "./hero/Hero";
import About from "./about/About";
import Service from "./service/Service";
import Experience from "./experiance/Experience";
import Project from "./project/Project";
import ExperienceContextProvider from "@/context/ExperienceContext";
import ProjectContextProvider from "@/context/ProjectContext";
import Contact from "./contact/Contact";
import ServiceContextProvider from "@/context/ServiceContext";
import Footer from "./footer/Footer";

const MainSection = () => {
  return (
    <div className="container">
      <Hero />

      <div className="my-20"></div>

      <About />

      <div className="my-20"></div>

      <ServiceContextProvider>
        <Service />
      </ServiceContextProvider>

      <div className="my-20"></div>

      <ExperienceContextProvider>
        <Experience />
      </ExperienceContextProvider>

      <div className="my-20"></div>

      <ProjectContextProvider>
        <Project />
      </ProjectContextProvider>

      <div className="my-20"></div>

      <Contact />

      <div className="my-20"></div>

      <Footer />
    </div>
  );
};

export default MainSection;
