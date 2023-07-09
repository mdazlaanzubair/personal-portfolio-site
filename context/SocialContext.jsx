"use client";

import { fetchContent } from "@/contentful/client";
import { useState, createContext, useContext, useEffect } from "react";

const SocialContext = createContext({});

export const useSocialContext = () => useContext(SocialContext);

const SocialContextProvider = ({ children }) => {
  // initial position coordinates
  const [socialLinks, setSocialLinks] = useState([]);

  // fetch Socials content from contentful
  useEffect(() => {
    fetchContent("social")
      .then((data) => {
        setSocialLinks(data);
      })
      .catch((err) =>
        console.log("Error while fetching experience data:\n\n", err)
      );
  }, []);

  const value = {
    socialLinks,
  };

  return (
    <SocialContext.Provider value={value}>{children}</SocialContext.Provider>
  );
};

export default SocialContextProvider;
