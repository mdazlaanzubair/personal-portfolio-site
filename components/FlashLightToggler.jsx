"use client";

import {
  RiLightbulbFlashFill as LightOn,
  RiLightbulbFlashLine as LightOff,
} from "react-icons/ri";

import useFlashLightStore from "@/store/FlashLightStore";

const FlashLightToggler = () => {
  const isLightOn = useFlashLightStore((state) => state.isLightOn);
  const flashLightToggler = useFlashLightStore(
    (state) => state.flashLightToggler
  );

  return (
    <button
      type="button"
      className="text-primary hover:text-yellow-500 text-xl btn btn-ghost btn-circle hover:bg-transparent"
      onClick={flashLightToggler}
    >
      {isLightOn ? <LightOn /> : <LightOff />}
    </button>
  );
};

export default FlashLightToggler;
