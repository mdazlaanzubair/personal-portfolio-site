"use client";

import { fetchContent } from "@/contentful/client";
import { useState, createContext, useContext, useEffect } from "react";

const ServiceContext = createContext({});

export const useServiceContext = () => useContext(ServiceContext);

const ServiceContextProvider = ({ children }) => {
  // initial position coordinates
  const [services, setServices] = useState([]);

  // fetch services content from contentful
  useEffect(() => {
    fetchContent("service")
      .then((data) => {
        setServices(data.map((service) => service.fields));
      })
      .catch((err) =>
        console.log("Error while fetching experience data:\n\n", err)
      );
  }, []);

  const value = {
    services,
  };

  return (
    <ServiceContext.Provider value={value}>{children}</ServiceContext.Provider>
  );
};

export default ServiceContextProvider;
