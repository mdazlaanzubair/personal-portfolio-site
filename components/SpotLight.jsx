"use client";

import { useEffect } from "react";
import usePointerStore from "@/store/PointerStore";

const SpotLight = () => {
  const pointerPos = usePointerStore((state) => state.pointerPos);
  const pointerTracker = usePointerStore((state) => state.pointerTracker);

  const handleCursorPointer = (event) => {
    pointerTracker({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const spotlight_styles = {
    background: `radial-gradient(300px at ${pointerPos.x}px ${pointerPos.y}px, rgba(0, 230, 176, 0.15), transparent 80%) fixed`,
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleCursorPointer);
    return () => window.removeEventListener("mousemove", handleCursorPointer);
  });

  return (
    <div
      className="hidden lg:flex w-full h-full absolute inset-0 overflow-hidden bg-fixed -z-10"
      style={spotlight_styles}
    ></div>
  );
};

export default SpotLight;
