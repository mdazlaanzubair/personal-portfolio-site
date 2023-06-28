import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useScrollStore = create(
  devtools((set) => ({
    scrollPos: { x: 0, y: 0 },
    scrollTracker: (coordinates) => set({ scrollPos: coordinates }),
  }))
);

export default useScrollStore;
