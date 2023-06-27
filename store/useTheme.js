import { create } from "zustand";

const useTheme = create((set) => ({
  isDark: true,
  toggleIsDark: () => set((state) => ({ isDark: !state.isDark })),
}));

export default useTheme;
