import Button from "../Button";
import ResumeLinkBtn from "../ResumeLinkBtn";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div
      id="home-section"
      className="flex flex-row min-h-screen justify-start items-center gap-5 px-5 lg:px-16 py-5 lg:py-16"
    >
      <div className="max-w-full">
        <h3 className="text-primary font-bold tracking-widest mb-3 px-1">
          Hi, myself
        </h3>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-5">
          <span className="inline-block sm:hidden">Muhd.</span>
          <span className="hidden sm:inline-block">Muhammad</span> Azlaan
          <span className="text-primary">,</span>
        </h1>
        <h2 className="text-3xl lg:text-5xl tracking-tight font-bold text-neutral-content mb-8 lg:mb-12">
          I am a Web Engineer a.k.a{" "}
          <span className="text-primary">
            Web{" "}
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Designer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Developer",
                1000,
                "Scraper",
                1000,
                "Content Writer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>
        </h2>
        <p className="mb-5 font-extralight leading-relaxed w-full md:max-w-3xl text-lg md:text-2xl">
          I code web to establish your online presence. I&apos;m a software
          engineer, specialized in building &amp; designing things for the web.
        </p>
        <p className="mb-5 font-normal leading-loose w-full md:max-w-3xl text-xs md:text-base">
          My aim is to help people establish their online presence.
        </p>
        <div className="flex lg:hidden gap-3">
          <Button
            type={"btn"}
            link={"/credentials"}
            text={"Credentials"}
            active_nav_title={"Credentials"}
          />
          <ResumeLinkBtn />
        </div>
      </div>
    </div>
  );
};

export default Hero;
