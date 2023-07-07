const Hero = () => {
  return (
    <div id="home-section" className="flex flex-col min-h-screen justify-start">
      <h3 className="text-accent-focus tracking-widest font-semibold mb-3 px-1">
        Hi, myself
      </h3>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5">
        <span className="inline-block sm:hidden">Muhd.</span>
        <span className="hidden sm:inline-block">Muhammad</span> Azlaan,
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
      <a
        href="#about-section"
        className="group text-primary max-w-32 font-semibold leading-loose"
      >
        <span className="relative overflow-x-hidden inline-flex">
          Explore more
          <span className="absolute w-full h-0.5 bg-primary left-0 bottom-0 -translate-x-2/3 group-hover:translate-x-0 transition-all ease-in-out duration-200"></span>
        </span>
      </a>
    </div>
  );
};

export default Hero;
