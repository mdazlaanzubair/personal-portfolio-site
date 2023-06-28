import { create } from "zustand";
import { devtools } from "zustand/middleware";

const usePointerStore = create(
  devtools((set) => ({
    pointerPos: { x: 0, y: 0 },
    pointerTracker: (coordinates) => set({ pointerPos: coordinates }),
  }))
);

export default usePointerStore;
