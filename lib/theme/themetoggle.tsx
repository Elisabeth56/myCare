"use client";

import { useTheme } from "./ThemeProvider";
import { useState, useEffect } from "react";
import Image from "next/image";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  // Only runs on client
  useEffect(() => {
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDark(theme === "dark" || (theme === "system" && systemPrefersDark));
  }, [theme]);

  return (
    <button
      aria-label="theme toggler"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex items-center justify-center rounded-full bg-gray-2 p-2 text-black dark:bg-dark-bg dark:text-white"
    >
      <Image
        src="/images/icon/icon-moon.svg"
        alt="moon"
        width={21}
        height={21}
        className="dark:hidden"
      />
      <Image
        src="/images/icon/icon-sun.svg"
        alt="sun"
        width={22}
        height={22}
        className="hidden dark:block"
      />
    </button>
  );
};

export default ThemeToggle;
