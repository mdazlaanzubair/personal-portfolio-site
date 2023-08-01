import { motion } from "framer-motion";

import OfferCard from "./OfferCard";
import OfferFilters from "./OfferFilters";

const Offerings = () => {
  return (
    <div className="flex flex-col min-h-screen justify-start items-start gap-10 px-5 lg:px-16 py-5 lg:py-16">
      <div className="w-full">
        <motion.h3
          initial={{ opacity: 0, translateY: 10 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="text-primary font-bold tracking-widest mb-3 px-1"
        >
          Solutions you&apos;ll need
        </motion.h3>
        <motion.h1
          initial={{ opacity: 0, translateY: 10 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black mb-5"
        >
          Services<span className="text-primary">.</span>
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, translateY: 10 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="text-xl md:text-2xl lg:text-3xl tracking-tight font-bold text-neutral-content mb-8 lg:mb-10"
        >
          Unlock success with solutions that go beyond expectations!
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, translateY: 10 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="font-medium leading-relaxed w-full text-sm md:text-base"
        >
          Here I provide exceptional services that will cater your needs. I
          believe in delivering solutions that not only meet your expectations
          but exceed them. With my passion for excellence and dedication to your
          satisfaction, I strive to make a positive impact on your business.
        </motion.p>
      </div>
      <OfferFilters />
      <OfferCard />
    </div>
  );
};

export default Offerings;
