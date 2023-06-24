"use client";

import { useEffect } from "react";
import { useGlobalContext } from "@/app/context/GlobalContext";

const SpotLight = () => {
  const { pointerPos, setPointerPos } = useGlobalContext();

  const handleCursorPointer = (event) => {
    console.log(event.clientX);
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
      className="w-full h-full absolute inset-0 overflow-hidden bg-fixed -z-10"
      style={{
        background: `radial-gradient(300px at ${pointerPos.x_axis}px ${pointerPos.y_axis}px, rgba(69, 104, 186, 0.15),transparent 80%) fixed`,
      }}
    ></div>
  );
};

export default SpotLight;
