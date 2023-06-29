import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useFlashLightStore = create(
  devtools((set) => ({
    isLightOn: false,
    flashLightToggler: () => set((state) => ({ isLightOn: !state.isLightOn })),
  }))
);

export default useFlashLightStore;
