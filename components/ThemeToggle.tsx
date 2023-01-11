import useThemeSwitcher from "@/utils/useThemeSwitcher";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export const ThemeToggle = () => {
  const [theme, setTheme] = useThemeSwitcher();

  const handleChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button onClick={handleChange} className="w-6 h-6">
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};
