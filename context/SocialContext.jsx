"use client";

import { fetchContent } from "@/contentful/client";
import { useState, createContext, useContext, useEffect } from "react";

const SocialContext = createContext({});

export const useSocialContext = () => useContext(SocialContext);

const SocialContextProvider = ({ children }) => {
  // initial position coordinates - pre loaded data for better User Exp.
  const [socialLinks, setSocialLinks] = useState([
    {
      title: "Facebook",
      url: "https://www.facebook.com/mdazlaanzubair/",
      icon: "null",
      username: ".com/mdazlaanzubair",
    },
    {
      title: "Chess",
      url: "https://www.chess.com/member/mdazlaanzubair",
      icon: "FaChessKnight",
      username: ".com/member/mdazlaanzubair",
    },
    {
      title: "Github",
      url: "https://github.com/mdazlaanzubair",
      icon: "FaGithub",
      username: ".com/mdazlaanzubair",
    },
    {
      title: "Twitter",
      url: "https://twitter.com/mdazlaanzubair",
      icon: "FaTwitter",
      username: ".com/mdazlaanzubair",
    },
    {
      title: "Instagram",
      url: "https://www.instagram.com/mdazlaanzubair/",
      icon: "FaInstagram",
      username: "@mdazlaanzubair",
    },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/mdazlaanzubair/",
      icon: "FaLinkedinIn",
      username: ".com/in/mdazlaanzubair",
    },
    {
      title: "Whatsapp",
      url: "https://wa.me/923113046692?text=Hi%20Azlaan!%20Hope%20you're%20doin'%20well.%20I%20just%20want%20to%20discuss%20a%20project%20with%20you.%20Please%20contact.",
      icon: "FaWhatsapp",
      username: "+92-311-3046692",
    },
  ]);

  // fetch Socials content from contentful
  useEffect(() => {
    fetchContent("social")
      .then((data) => {
        setSocialLinks(data.map((item) => item.fields));
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
