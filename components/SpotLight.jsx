"use client";

import { useEffect } from "react";
import usePointerStore from "@/store/PointerStore";
import useFlashLightStore from "@/store/FlashLightStore";

const SpotLight = () => {
  const isLightOn = useFlashLightStore((state) => state.isLightOn);
  const pointerPos = usePointerStore((state) => state.pointerPos);
  const pointerTracker = usePointerStore((state) => state.pointerTracker);

  const handleCursorPointer = (event) => {
    pointerTracker({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const spotlight_styles = {
    background: `radial-gradient(600px at ${pointerPos.x}px ${pointerPos.y}px, rgba(29, 78, 216, 0.15), transparent 80%) fixed`,
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleCursorPointer);
    return () => window.removeEventListener("mousemove", handleCursorPointer);
  });

  return (
    <div
      className={`hidden ${
        isLightOn ? "lg:flex" : "lg:hidden"
      } w-full h-full absolute inset-0 overflow-hidden bg-fixed`}
      style={spotlight_styles}
    ></div>
  );
};

export default SpotLight;
