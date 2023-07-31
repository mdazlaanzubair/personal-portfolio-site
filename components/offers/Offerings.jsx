import OfferCard from "./OfferCard";
import OfferFilters from "./OfferFilters";

const Offerings = () => {
  return (
    <div className="flex flex-col min-h-screen justify-start items-start gap-10 px-5 lg:px-16 py-5 lg:py-16">
      <div className="w-full">
        <h3 className="text-primary font-bold tracking-widest mb-3 px-1">
          Solutions you&apos;ll need
        </h3>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-5">
          Services<span className="text-primary">.</span>
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl tracking-tight font-bold text-neutral-content mb-8 lg:mb-10">
          Unlock success with solutions that go beyond expectations!
        </h2>
        <p className="font-medium leading-relaxed w-full text-sm md:text-base">
          Here I provide exceptional services that will cater your needs. I
          believe in delivering solutions that not only meet your expectations
          but exceed them. With my passion for excellence and dedication to your
          satisfaction, I strive to make a positive impact on your business.
        </p>
      </div>
      <OfferFilters />
      <OfferCard />
    </div>
  );
};

export default Offerings;
