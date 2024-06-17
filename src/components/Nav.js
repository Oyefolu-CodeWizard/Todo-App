import { useState, useEffect } from "react";
import iconMoon from "./images/icon-moon.svg";
import iconSun from "./images/icon-sun.svg";

export default function Nav() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : false;
  });

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light"
    );
  }, [isDarkMode]);

  const handleSwitchTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    document.documentElement.setAttribute(
      "data-theme",
      newTheme ? "dark" : "light"
    );
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  return (
    <div className="nav">
      <h1>TODO</h1>
      <img
        src={isDarkMode ? iconSun : iconMoon}
        alt={isDarkMode ? "sun" : "moon"}
        onClick={handleSwitchTheme}
      />
    </div>
  );
}
