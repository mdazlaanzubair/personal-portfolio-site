"use client";
import ServiceCard from "./ServiceCard";

const Service = () => {
  return (
    <div
      id="service-section"
      className="flex flex-col min-h-screen justify-start px-0 py-10 lg:px-10 lg:py-20"
    >
      <h3 className="text-accent-focus tracking-widest font-semibold mb-3 px-1">
        My offerings
      </h3>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5">
        Services
      </h1>
      <p className="mb-5 font-light leading-loose w-full md:max-w-2xl text-xs md:text-base">
        I offer services to cater to your specific requirements. Whether
        you&apos;re a small business owner, entrepreneur, or individual looking
        to establish your online presence, I have the expertise to deliver
        exceptional results.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="card bg-transparent">
          <h2 className="text-3xl md:text-3xl lg:text-4xl tracking-tight font-bold text-neutral-content my-auto text-left lg:text-right">
            I offer solutions that makes difference.
          </h2>
        </div>
        <ServiceCard />
      </div>
    </div>
  );
};

export default Service;
