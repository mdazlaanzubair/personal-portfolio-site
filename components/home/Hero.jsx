const Hero = () => {
  return (
    <div id="home-section" className="hero py-20 md:py-24 justify-start">
      <div className="hero-content">
        <div className="max-w-full lg:px-20">
          <h1 className="text-accent-focus tracking-widest font-semibold mb-3 px-1">
            Hi, myself
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 text-navy-slate-light">
            <span className="inline-block sm:hidden">Muhd.</span>
            <span className="hidden sm:inline-block">Muhammad</span> Azlaan,
          </h1>
          <h1 className="text-3xl md:text-5xl lg:text-6xl tracking-tight font-bold text-navy-slate-dark mb-8 lg:mb-12">
            I code web to establish your online presence.
          </h1>
          <p className="mb-5 font-extralight leading-relaxed text-navy-slate-light w-full md:max-w-3xl text-lg md:text-2xl">
            I&apos;m a software engineer, specialized in building &amp;
            designing things for the web.
          </p>
          <p className="mb-5 font-normal leading-loose text-navy-slate w-full md:max-w-3xl text-xs md:text-base">
            My aim is to help people establish their online presence.
          </p>
          <a
            href="#about-section"
            className="group text-primary font-semibold leading-loose"
          >
            <span className="relative overflow-x-hidden inline-flex">
              Explore more
              <span className="absolute w-full h-0.5 bg-primary left-0 bottom-0 -translate-x-2/3 group-hover:translate-x-0 transition-all ease-in-out duration-200"></span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
