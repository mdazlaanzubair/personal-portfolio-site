"use client";

import { useState, createContext, useContext, useEffect } from "react";

const GlobalContext = createContext({});

export const useGlobalContext = () => useContext(GlobalContext);

const GlobalContextProvider = ({ children }) => {
  const [scrollPos, setScrollPos] = useState({
    x_axis: 0,
    y_axis: 0,
  });

  const [pointerPos, setPointerPos] = useState({
    x_axis: 0,
    y_axis: 0,
  });

  const [isDark, setIsDark] = useState(false);

  const [navToggle, setNavToggle] = useState(false);

  const value = {
    scrollPos,
    setScrollPos,
    pointerPos,
    setPointerPos,
    isDark,
    setIsDark,
    navToggle,
    setNavToggle,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
