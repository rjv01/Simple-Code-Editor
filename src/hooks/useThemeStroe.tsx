import { create } from "zustand";

type ThemeType = {
    theme:string,
    setTheme:(theme:string)=>void
}

export const useThemeStore = create<ThemeType>((set) => ({
  theme: localStorage.getItem("rjv01-codeEditor-theme") ?? "retro",
  setTheme: (theme) => {
    localStorage.setItem("rjv01-codeEditor-theme", theme);
    set({ theme });
  },
}));