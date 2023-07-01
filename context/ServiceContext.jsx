"use client";

import client from "@/contentful/client";
import { useState, createContext, useContext, useEffect } from "react";

const ServiceContext = createContext({});

export const useServiceContext = () => useContext(ServiceContext);

const ServiceContextProvider = ({ children }) => {
  // initial position coordinates
  const [services, setServices] = useState([]);

  // fetch services content from content-ful
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await client.getEntries({ content_type: "service" });
        setServices(data.items);
      } catch (error) {
        console.error(
          "Error while fetching from contentful service table:\n\n",
          error
        );
      }
    };
    fetchData();
  }, []);

  const value = {
    services,
    setServices,
  };

  return (
    <ServiceContext.Provider value={value}>{children}</ServiceContext.Provider>
  );
};

export default ServiceContextProvider;
