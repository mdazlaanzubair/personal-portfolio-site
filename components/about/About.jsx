import { BiChevronRight as ListIcon } from "react-icons/bi";

import Button from "../Button";
import ResumeDownloadBtn from "../ResumeDownloadBtn";

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
      className="flex flex-col lg:flex-row min-h-screen justify-start items-center gap-10 shadow-lg px-5 lg:px-16 py-5 lg:py-16 bg-base-100"
    >
      <div className="w-full lg:max-w-1/3">
        <h3 className="text-primary font-bold tracking-widest mb-3 px-1">
          Who am I?
        </h3>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-5">
          About<span className="text-primary">.</span>
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl tracking-tight font-bold text-neutral-content mb-8 lg:mb-10">
          Know about me, myself & my skills.
        </h2>
        <p className="mb-5 font-normal leading-relaxed w-full md:max-w-3xl text-sm md:text-base">
          Hello, my name is{" "}
          <strong title="mdazlaanzubair" className="text-primary">
            Muhammad Azlaan Zubair
          </strong>
          , and I am a web designer and developer. I specialize in creating
          clean, functional, and fully responsive websites that look amazing on
          any device.
        </p>
        <p className="mb-5 font-semibold leading-relaxed w-full md:max-w-3xl text-sm md:text-base">
          I have a proven track record of success. I have worked with a variety
          of businesses, from small startups to large corporations. I have
          helped them create websites that have helped them increase their
          online presence, generate leads, and improve their bottom line.
        </p>
        <p className="mb-0 lg:mb-5 font-normal leading-relaxed w-full md:max-w-3xl text-sm md:text-base">
          I have a deep appreciation for minimal and clean designs, as they
          effectively convey a brand&apos;s message and identity. I am able to
          create websites that are both visually appealing and technically
          sound.
        </p>
        <div className="hidden lg:flex flex-row flex-wrap gap-3 mt-5 items-center">
          <Button
            type={"btn"}
            link={"/credentials"}
            text={"Credentials"}
            active_nav_title={"Credentials"}
          />
          <ResumeDownloadBtn />
        </div>
      </div>
      <div className="w-full lg:max-w-1/2">
        <p className="mb-5 font-semibold leading-relaxed w-full md:max-w-3xl text-sm md:text-base">
          If you are looking for a web designer and developer who can help you
          create a website that will make a difference, then I am the person for
          you. I am confident that I can help you create a website that you will
          be proud of.
        </p>
        <p className="mb-5 font-normal leading-relaxed w-full md:max-w-3xl text-sm md:text-base">
          I am able to clearly understand your needs and translate them into a
          website that meets your requirements.
        </p>
        <p className="mb-5 font-normal leading-loose w-full md:max-w-3xl text-xs md:text-base">
          I would be happy to discuss your project with you in more detail.
          Please feel free to contact me via{" "}
          <Button
            link="mailto:mdazlaan1996@gmail.com"
            type="link"
            text="Email"
          />{" "}
          or{" "}
          <Button
            link="https://wa.me/923113046692?text=Hi%20Azlaan!%20Hope%20you're%20doin'%20well.%20I%20just%20want%20to%20discuss%20a%20project%20with%20you.%20Please%20contact."
            type="link"
            text="WhatsApp"
          />{" "}
          .
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
      </div>
    </div>
  );
};

export default About;
