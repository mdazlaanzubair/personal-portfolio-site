import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useNavStore = create(
  devtools((set) => ({
    toggleNav: true,
    navToggler: () => set((state) => ({ toggleNav: !state.toggleNav })),

    activeNav: "Home",
    navActivator: (nav_title) => set(() => ({ activeNav: nav_title })),
  }))
);

export default useNavStore;
