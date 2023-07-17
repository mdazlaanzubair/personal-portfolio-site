import Button from "../Button";
import ServiceCard from "./ServiceCard";

const Service = () => {
  return (
    <div
      id="service-section"
      className="flex flex-col min-h-screen justify-start shadow-lg px-5 lg:px-16 py-5 lg:py-16 bg-base-100"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="my-auto">
          <h3 className="text-accent-focus tracking-widest font-semibold mb-3 px-1">
            Solutions
          </h3>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-5">
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
            <div className="my-auto">
              <h2 className="text-3xl md:text-3xl lg:text-4xl tracking-tight font-bold text-neutral-content my-3">
                I offer solutions that makes difference.
              </h2>
              <Button
                type={"link"}
                link={"/offers"}
                text={"Checkout my offerings"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
