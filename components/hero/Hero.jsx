import Animator from "../Animator";
import * as home_animation from "../../public/home_animation.json";
import Button from "../Button";

const Hero = () => {
  return (
    <div
      id="home-section"
      className="flex flex-row min-h-screen justify-start items-center gap-5 shadow-lg px-5 lg:px-16 py-5 lg:py-16 bg-base-100"
    >
      <div className="max-w-full lg:max-w-2xl">
        <h3 className="text-primary font-bold tracking-widest mb-3 px-1">
          Hi, myself
        </h3>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-5">
          <span className="inline-block sm:hidden">Muhd.</span>
          <span className="hidden sm:inline-block">Muhammad</span> Azlaan
          <span className="text-primary">,</span>
        </h1>
        <h2 className="text-3xl lg:text-5xl tracking-tight font-bold text-neutral-content mb-8 lg:mb-12">
          I code web to establish your online presence.
        </h2>
        <p className="mb-5 font-extralight leading-relaxed w-full md:max-w-3xl text-lg md:text-2xl">
          I&apos;m a software engineer, specialized in building &amp; designing
          things for the web.
        </p>
        <p className="mb-5 font-normal leading-loose w-full md:max-w-3xl text-xs md:text-base">
          My aim is to help people establish their online presence.
        </p>
        <div className="flex lg:hidden">
          <Button type={"btn"} text={"Resume"} link={"#about-section"} />
        </div>
      </div>

      <div className="hidden max-w-full lg:flex">
        <Animator animation={home_animation} />
      </div>
    </div>
  );
};

export default Hero;
