import { createContext } from "react";
import type { AppContextType } from "../types/AppContext";

export const AppContext = createContext<AppContextType>({
  theme: "dark", // 🔥 Mặc định dark
  switchTheme: () => {
    const root = document.documentElement;
    if (root.classList.contains("dark")) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  },
});
