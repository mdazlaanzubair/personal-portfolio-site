import { BiChevronRight as ListIcon } from "react-icons/bi";

import Animator from "../Animator";
import * as about_animation from "../../public/about_animation.json";

import Button from "../Button";

const About = () => {
  const skill_tags = [
    "Designing",
    "Development",
    "Content Writing",
    "Web Scraping",
    "SEO",
    "Consulting",
  ];

  return (
    <div
      id="about-section"
      className="flex flex-row min-h-screen justify-start gap-5 shadow-lg px-5 lg:px-16 py-5 lg:py-16 bg-base-100"
    >
      <div>
        <h3 className="text-accent-focus tracking-widest font-semibold mb-3">
          Referring to myself
        </h3>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5">
          Who am I
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl tracking-tight font-bold text-neutral-content mb-8 lg:mb-10">
          Know about me, myself & my skills.
        </h2>
        <p className="mb-5 font-normal leading-relaxed w-full md:max-w-3xl text-sm md:text-base">
          Hello! myself{" "}
          <strong title="mdazlaanzubair" className="text-primary">
            Muhammad Azlaan Zubair
          </strong>
          , a dedicated web designer & developer. My expertise lies in crafting
          clean, functional, and fully responsive websites that look amazing on
          any device.
        </p>
        <p className="mb-5 font-normal leading-loose w-full md:max-w-3xl text-xs md:text-base">
          I have a deep appreciation for minimal and clean designs, as they
          effectively convey a brand&apos;s message and identity.
        </p>
        <p className="mb-3 font-semibold leading-loose w-full md:max-w-3xl text-xs md:text-base">
          To be precise, I do:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-0 justify-start mb-3">
          {skill_tags.map((tag, index) => {
            return (
              <div
                className="flex flex-row gap-3 py-3 items-center"
                key={index}
              >
                <span className="text-primary text-xl">
                  <ListIcon />
                </span>

                <span className="font- text-xs">{tag}</span>
              </div>
            );
          })}
        </div>
        <div className="flex flex-row flex-wrap gap-3 mt-5 items-center">
          <Button type={"btn"} link={"/about"} text={"Credentials"} />
          <Button type={"btn"} link={"/portfolio"} text={"Work Archive"} />
          <Button type={"btn"} link={"#about-section"} text={"Resume"} />
        </div>
      </div>
      <div className="hidden max-w-full lg:flex">
        <Animator animation={about_animation} />
      </div>
    </div>
  );
};

export default About;
