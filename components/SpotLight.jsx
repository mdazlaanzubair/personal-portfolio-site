"use client";

import { useEffect } from "react";
import { useGlobalContext } from "@/app/context/GlobalContext";
import useTheme from "@/store/useTheme";

const SpotLight = () => {
  const { pointerPos, setPointerPos } = useGlobalContext();
  const isDark = useTheme((state) => state.isDark);


  const handleCursorPointer = (event) => {
    setPointerPos({
      x_axis: event.clientX,
      y_axis: event.clientY,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleCursorPointer);
    return () => window.removeEventListener("mousemove", handleCursorPointer);
  });

  return (
    <div
      className="hidden lg:flex w-full h-full absolute inset-0 overflow-hidden bg-fixed -z-10"
      style={{
        background: `radial-gradient(300px at ${pointerPos.x_axis}px ${
          pointerPos.y_axis
        }px, ${
          isDark ? "rgba(69, 104, 186, 0.15)" : "rgb(252, 75, 119, 0.15)"
        }, transparent 80%) fixed`,
      }}
    ></div>
  );
};

export default SpotLight;
