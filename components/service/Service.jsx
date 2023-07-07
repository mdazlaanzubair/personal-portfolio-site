import ServiceCard from "./ServiceCard";

const Service = () => {
  return (
    <div
      id="service-section"
      className="flex flex-col min-h-screen justify-start"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="div">
          <h3 className="text-accent-focus tracking-widest font-semibold mb-3 px-1">
            Solutions
          </h3>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5">
            Services
          </h1>
          <p className="mb-5 font-light leading-loose w-full md:max-w-2xl text-xs md:text-base">
            I offer services to cater to your specific requirements.
          </p>
          <p className="mb-5 font-light leading-loose w-full md:max-w-2xl text-xs md:text-base">
            Whether you&apos;re a small business owner, entrepreneur, or
            individual looking to establish your online presence, I have the
            expertise to deliver exceptional results.
          </p>
        </div>
        <ServiceCard />
        <div className="card bg-transparent rounded-sm">
          <div className="card-body">
            <h2 className="text-3xl md:text-3xl lg:text-4xl tracking-tight font-bold text-neutral-content my-3">
              I offer solutions that makes difference.
            </h2>
            <a
              href="#about-section"
              className="group text-primary font-semibold leading-loose"
            >
              <span className="relative overflow-x-hidden inline-flex">
                Checkout my offerings
                <span className="absolute w-full h-0.5 bg-primary left-0 bottom-0 -translate-x-2/3 group-hover:translate-x-0 transition-all ease-in-out duration-200"></span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
