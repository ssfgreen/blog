import { useEffect, useState } from "react";

const useThemeSwitcher = () => {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }

    if (theme === "dark") {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    }
    if (theme === "light") {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return [theme, setTheme] as const;
};

export default useThemeSwitcher;
