"use client";

import { fetchContent } from "@/contentful/client";
import { useState, createContext, useContext, useEffect } from "react";

const OffersContext = createContext({});

export const useOffersContext = () => useContext(OffersContext);

const OffersContextProvider = ({ children }) => {
  // initial position coordinates
  const [offers, setOffers] = useState([]);
  const [filteredOffers, setFilteredOffers] = useState([]);

  // performing filter on "filteredOffers" by types
  function filterByType(type = "Both") {
    if (type === "Both") {
      setFilteredOffers(filteredOffers);
    } else {
      setFilteredOffers(
        filteredOffers.filter(
          (offer) => offer.type.toLowerCase() === type.toLowerCase()
        )
      );
    }
  }

  // performing filter on "offers" by categories
  const filterByCategory = (filter = "All") => {
    if (filter === "All") {
      setFilteredOffers(offers);
    } else {
      setFilteredOffers(
        offers.filter(
          (offer) => offer.category.toLowerCase() === filter.toLowerCase()
        )
      );
    }
  };

  // performing sort on "filteredOffers" by pricing
  function sortByPrice(ascending = "true") {
    if (ascending === "true") {
      setFilteredOffers(filteredOffers.sort((a, b) => a.price - b.price));
    } else {
      setFilteredOffers(filteredOffers.sort((a, b) => b.price - a.price));
    }
  }

  // fetch services content from contentful
  useEffect(() => {
    fetchContent("offers")
      .then((data) => {
        setOffers(data.map((offer) => offer.fields));
        setFilteredOffers(data.map((offer) => offer.fields));
      })
      .catch((err) =>
        console.log("Error while fetching experience data:\n\n", err)
      );
  }, []);

  const value = {
    filteredOffers,
    filterByCategory,
    filterByType,
    sortByPrice,
  };

  return (
    <OffersContext.Provider value={value}>{children}</OffersContext.Provider>
  );
};

export default OffersContextProvider;
