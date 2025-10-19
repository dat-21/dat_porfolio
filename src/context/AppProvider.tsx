import React, { useState, useEffect } from "react";
import { AppContext } from "./AppContext";
import type { AppContextType } from "../types/AppContext";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  //React.ReactNode: “Prop children này có thể chứa bất kỳ nội dung React hợp lệ nào.”
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    // Lấy theme từ localStorage nếu có, nếu không thì mặc định là dark
    return (localStorage.getItem("theme") as "light" | "dark") || "dark";
  }); 

  // Khi theme thay đổi, cập nhật class "dark" vào <html>
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]); 

  const switchTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const contextValue: AppContextType = {
    theme,
    switchTheme,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};
