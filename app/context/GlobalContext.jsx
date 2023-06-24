"use client";

import { useState, createContext, useContext } from "react";

const GlobalContext = createContext({});

export const useGlobalContext = () => useContext(GlobalContext);

const GlobalContextProvider = ({ children }) => {
  const [scrollPos, setScrollPos] = useState({
    x_axis: 0,
    y_axis: 0,
  });

  const [pointePos, setPointePos] = useState({
    x_axis: 0,
    y_axis: 0,
  });

  const [theme, setTheme] = useState(false);

  const [navToggle, setNavToggle] = useState(false);

  const value = {
    scrollPos,
    setScrollPos,
    theme,
    setTheme,
    navToggle,
    setNavToggle,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
