import { motion } from "framer-motion";

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
        <motion.h3
          initial={{ opacity: 0, translateY: 10 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="text-primary font-bold tracking-widest mb-3 px-1"
        >
          Hi, myself
        </motion.h3>
        <motion.h1
          initial={{ opacity: 0, translateY: 10 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-7xl font-black mb-5"
        >
          <span className="inline-block sm:hidden">Muhd.</span>
          <span className="hidden sm:inline-block">Muhammad</span> Azlaan
          <span className="text-primary">,</span>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, translateY: 10 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="text-3xl lg:text-5xl tracking-tight font-bold text-neutral-content mb-8 lg:mb-12"
        >
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
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, translateY: 10 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="mb-5 font-extralight leading-relaxed w-full md:max-w-3xl text-lg md:text-2xl"
        >
          I code web to establish your online presence. I&apos;m a software
          engineer, specialized in building &amp; designing things for the web.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, translateY: 10 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="mb-5 font-normal leading-loose w-full md:max-w-3xl text-xs md:text-base"
        >
          My aim is to help people establish their online presence.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, translateY: 10 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          className="flex lg:hidden gap-3"
        >
          <Button
            type={"btn"}
            link={"/credentials"}
            text={"Credentials"}
            active_nav_title={"Credentials"}
          />
          <ResumeLinkBtn />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
