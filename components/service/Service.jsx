import Button from "../Button";
import ServiceCard from "./ServiceCard";

const Service = () => {
  return (
    <div
      id="service-section"
      className="flex flex-col min-h-screen justify-start px-5 lg:px-16 py-5 lg:py-16"
    >
      <div className="my-auto">
        <h3 className="text-primary font-bold tracking-widest mb-3 px-1">
          Solutions
        </h3>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-5">
          Services<span className="text-primary">.</span>
        </h1>
        <p className="text-3xl md:text-3xl lg:text-4xl tracking-tight font-bold text-neutral-content mb-5">
          I offer solutions that makes difference.
        </p>
        <p className="mb-5 font-light leading-loose w-full md:max-w-2xl text-xs md:text-base">
          Whether you&apos;re a small business owner, entrepreneur, or
          individual looking to establish your online presence, I have the
          expertise to deliver exceptional results.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <ServiceCard />
        <div className="card bg-transparent rounded-sm">
          <div className="card-body">
            <div className="my-auto">
              <h2 className="text-3xl md:text-3xl lg:text-4xl tracking-tight font-bold text-neutral-content my-3">
                My offerings will cater your needs.
              </h2>
              <Button
                type={"link"}
                link={"/offers"}
                text={"Checkout my offerings"}
                active_nav_title={"Offerings"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
