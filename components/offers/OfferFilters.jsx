"use client";

import { motion } from "framer-motion";

import { useOffersContext } from "@/context/OffersContext";
import { useServiceContext } from "@/context/ServiceContext";
import { useEffect, useState } from "react";

const OfferFilters = () => {
  const { services } = useServiceContext();
  const { filterByCategory, filterByType, sortByPrice } = useOffersContext();
  const [activeFilter, setActiveFilter] = useState("");

  useEffect(() => {
    setActiveFilter("All");
  }, []);

  return (
    services &&
    services.length > 0 && (
      <div className="w-full flex flex-col justify-center gap-3">
        <div className="flex flex-row justify-start items-center gap-3">
          <ul className="w-full grow hidden lg:flex flex-row flex-wrap justify-center items-center">
            <motion.li
              initial={{ opacity: 0, translateX: 10, translateY: 10 }}
              whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className={`p-3 text-base border-b-4 rounded-sm cursor-pointer ${
                activeFilter.toLowerCase() === "all"
                  ? "font-bold text-primary bg-dark border-primary"
                  : "font-semibold text-base-content bg-base-100 border-dark"
              }`}
              onClick={() => {
                setActiveFilter("All");
                filterByCategory("All");
              }}
            >
              All
            </motion.li>
            {services.map((service, index) => (
              <motion.li
                initial={{ opacity: 0, translateX: 10, translateY: 10 }}
                whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
                transition={{ duration: 0.3, delay: (index + 1) * 0.1 }}
                key={index}
                className={`p-3 text-base border-b-4 rounded-sm cursor-pointer ${
                  activeFilter.toLowerCase() === service.title.toLowerCase()
                    ? "font-bold text-primary bg-dark border-primary"
                    : "font-semibold text-base-content bg-base-100 border-dark"
                }`}
                onClick={() => {
                  setActiveFilter(service.title);
                  filterByCategory(service.title);
                }}
              >
                {service.title}
              </motion.li>
            ))}
          </ul>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="w-full grow flex lg:hidden flex-row gap-3 justify-start items-center"
          >
            <h1 className="text-base font-bold shrink">Filter</h1>
            <select
              className="w-full select select-bordered select-sm rounded-sm focus:outline-none"
              defaultValue={activeFilter}
              onChange={(e) => {
                setActiveFilter(e.target.title);
                filterByCategory(e.target.value);
              }}
            >
              {services.map((service, index) => (
                <option key={index} value={service.title}>
                  {service.title}
                </option>
              ))}
            </select>
          </motion.div>
        </div>
        <div className="flex flex-col sm:flex-row justify-start sm:justify-between items-start sm:items-center gap-3">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="w-auto flex flex-row gap-3 justify-start items-center"
          >
            <h1 className="text-xs lg:text-sm font-semibold shrink">
              Offer Types
            </h1>
            <select
              className="select select-bordered select-sm rounded-sm focus:outline-none"
              onChange={(e) => filterByType(e.target.value)}
            >
              <option value="Both">Both</option>
              <option value="Basic">Basic</option>
              <option value="Premium">Premium</option>
            </select>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="w-auto flex flex-row gap-3 justify-start items-center"
          >
            <h1 className="text-xs lg:text-sm font-semibold shrink">
              Sort by Price
            </h1>
            <select
              className="select select-bordered select-sm rounded-sm focus:outline-none"
              onChange={(e) => sortByPrice(e.target.value)}
            >
              <option value="true">Low to High</option>
              <option value="false">High to Low</option>
            </select>
          </motion.div>
        </div>
      </div>
    )
  );
};

export default OfferFilters;
