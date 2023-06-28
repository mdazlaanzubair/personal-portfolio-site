import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useNavStore = create(
  devtools((set) => ({
    isMobileNav: false,
    mobileNavToggler: () =>
      set((state) => ({ isMobileNav: !state.isMobileNav })),
  }))
);

export default useNavStore;
