import {
  AiOutlineAntDesign as GraphicIcon,
  // AiFillRobot as Scraping,
} from "react-icons/ai";
import { FaLaptopCode as Development } from "react-icons/fa";
import { SiWritedotas as Writing } from "react-icons/si";
import { TbRobot as Scraping } from "react-icons/tb";

import Animator from "../Animator";

import * as about_animation from "../../public/about_animation.json";

const About = () => {
  const about_skills = [
    { title: "Web Designing", Icon: GraphicIcon },
    { title: "Web Development", Icon: Development },
    { title: "Content Writing", Icon: Writing },
    { title: "Web Scraping", Icon: Scraping },
  ];

  return (
    <div id="about-section" className="hero py-20 md:py-24 justify-start">
      <div className="hero-content flex-col lg:flex-row-reverse lg:px-20">
        <div className="hidden lg:flex lg:max-w-full">
          <Animator animation={about_animation} />
        </div>
        <div className="max-w-full lg:max-w-xl">
          <h1 className="text-accent-focus tracking-widest font-semibold mb-3">
            Who am I ?
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 text-navy-slate-light">
            About me
          </h1>
          <h1 className="text-xl md:text-2xl lg:text-3xl tracking-tight font-bold text-navy-slate-dark mb-8 lg:mb-10">
            Know about me, myself & my skills.
          </h1>
          <p className="mb-5 font-normal leading-relaxed text-navy-slate w-full md:max-w-3xl text-sm md:text-base">
            Hello! myself{" "}
            <strong title="mdazlaanzubair" className="text-primary">
              Muhammad Azlaan Zubair
            </strong>
            , a dedicated web designer & developer. My expertise lies in
            crafting clean, functional, and fully responsive websites that look
            amazing on any device.
          </p>
          <p className="mb-5 font-normal leading-loose text-navy-slate w-full md:max-w-3xl text-xs md:text-base">
            I have a deep appreciation for minimal and clean designs, as they
            effectively convey a brand&apos;s message and identity.
          </p>
          <p className="mb-5 font-semibold leading-loose text-navy-slate w-full md:max-w-3xl text-xs md:text-base">
            To be precise, I do:
          </p>
          <div className="grid grid-cols-2 gap-0 justify-center mb-10">
            {about_skills.map((skill, index) => {
              const { title, Icon } = skill;
              return (
                <div className="alert bg-transparent border-none" key={index}>
                  <span className="text-accent-focus text-3xl">
                    <Icon />
                  </span>
                  <span className="font-medium uppercase tracking-wider text-sm">
                    {title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
