import { BiChevronRight as ListIcon } from "react-icons/bi";

import Animator from "./Animator";
import * as about_animation from "../public/about_animation.json";

import Link from "next/link";

const About = () => {
  const about_skills = [
    "Designing",
    "Development",
    "Content Writing",
    "Web Scraping",
    "SEO",
    "Consulting",
  ];

  const nest_about_link = [
    { title: "Credentials ", url: "/about" },
    { title: "Testimonial ", url: "#portfolio-section" },
    { title: "Work ", url: "#portfolio-section" },
  ];

  return (
    <div
      id="about-section"
      className="flex flex-row-reverse min-h-screen justify-start gap-5 px-0 py-10 lg:px-10 lg:py-20"
    >
      <div className="hidden max-w-full lg:flex">
        <Animator animation={about_animation} />
      </div>
      <div>
        <h3 className="text-accent-focus tracking-widest font-semibold mb-3">
          Referring to myself
        </h3>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 text-navy-slate-light">
          Who am I
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl tracking-tight font-bold text-navy-slate-dark mb-8 lg:mb-10">
          Know about me, myself & my skills.
        </h2>
        <p className="mb-5 font-normal leading-relaxed text-navy-slate w-full md:max-w-3xl text-sm md:text-base">
          Hello! myself{" "}
          <strong title="mdazlaanzubair" className="text-primary">
            Muhammad Azlaan Zubair
          </strong>
          , a dedicated web designer & developer. My expertise lies in crafting
          clean, functional, and fully responsive websites that look amazing on
          any device.
        </p>
        <p className="mb-5 font-normal leading-loose text-navy-slate w-full md:max-w-3xl text-xs md:text-base">
          I have a deep appreciation for minimal and clean designs, as they
          effectively convey a brand&apos;s message and identity.
        </p>
        <p className="mb-3 font-semibold leading-loose text-navy-slate w-full md:max-w-3xl text-xs md:text-base">
          To be precise, I do:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-0 justify-start mb-3">
          {about_skills.map((skill, index) => {
            return (
              <div
                className="flex flex-row gap-3 py-3 items-center text-navy-slate"
                key={index}
              >
                <span className="text-primary text-xl">
                  <ListIcon />
                </span>

                <span className="font- text-xs">{skill}</span>
              </div>
            );
          })}
        </div>
        <div className="flex flex-row flex-wrap gap-3 mt-5">
          {nest_about_link.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              className="btn btn-sm sm:btn-md btn-outline btn-primary rounded-sm capitalize mr-2 hover:translate-x-1 hover:translate-y-1 transition-all ease-in-out duration-300"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
