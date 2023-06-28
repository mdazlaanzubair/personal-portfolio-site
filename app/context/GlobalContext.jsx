"use client";

import { useState, createContext, useContext } from "react";

const GlobalContext = createContext({});

export const useGlobalContext = () => useContext(GlobalContext);

const GlobalContextProvider = ({ children }) => {
  // initial position coordinates
  const initial_coordinates = {
    x_axis: 0,
    y_axis: 0,
  };

  // global states initialization
  const [scrollPos, setScrollPos] = useState(initial_coordinates);
  const [pointerPos, setPointerPos] = useState(initial_coordinates);
  const [isDark, setIsDark] = useState(false);
  const [navToggle, setNavToggle] = useState(false);

  // functions - state mutators
  const scrollTracker = (coordinates) => setScrollPos(coordinates);
  const cursorTracker = (coordinates) => setPointerPos(coordinates);
  const darkModeToggler = () => setIsDark(!isDark);
  const navBarToggler = () => setNavToggle(!navToggle);

  const value = {
    // global states
    scrollPos,
    pointerPos,
    isDark,
    navToggle,

    // global state mutators
    scrollTracker,
    cursorTracker,
    darkModeToggler,
    navBarToggler,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
