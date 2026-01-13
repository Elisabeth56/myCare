"use client";

import { useTheme } from "../lib/theme/ThemeProvider";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"; // use your updated shadcn button

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="inline-block"
    >
      <Button
        variant="ghost"
        onClick={toggleTheme}
        className="flex items-center justify-center px-3 py-1"
      >
        {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
      </Button>
    </motion.div>
  );
}
