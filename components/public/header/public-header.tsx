"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggle from "@/lib/theme/themetoggle";
import menuData from "./menu-data";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);

  const pathUrl = usePathname();

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) setStickyMenu(true);
    else setStickyMenu(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
    return () => window.removeEventListener("scroll", handleStickyMenu);
  }, []);

  return (
    <header
      className={`fixed w-full z-[9999] transition-colors duration-300 ${
      stickyMenu
      ? "bg-[hsl(var(--background))] shadow-sm py-4" // when scrolling, add subtle shadow
      : "bg-transparent py-6" // initially transparent to match hero or page
      }`}
    >
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
        <h1 className="text-4xl font-bold text-white">
           myCARE
         </h1>
        </Link>

        {/* Navigation */}
        <nav className="hidden xl:flex gap-10 items-center">
          {menuData.map((item, i) =>
            item.submenu ? (
              <div key={i} className="relative group">
                <button
                  onClick={() => setDropdownToggler(!dropdownToggler)}
                  className="flex items-center gap-2 text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))]"
                >
                  {item.title}
                  <span className="inline-block rotate-0 group-hover:rotate-180 transition-transform">
                    ▼
                  </span>
                </button>
                <ul
                  className={`absolute top-full left-0 mt-2 bg-[hsl(var(--white))] dark:bg-[hsl(var(--blacksection))] shadow-solid-13 rounded-md p-4 flex-col gap-2 flex ${
                    dropdownToggler ? "flex" : "hidden"
                  }`}
                >
                  {item.submenu.map((sub, idx) => (
                    <li key={idx}>
                      <Link
                        href={sub.path || "#"}
                        className="block px-2 py-1 hover:text-[hsl(var(--primary))]"
                      >
                        {sub.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <Link
                key={i}
                href={item.path || "#"}
                className={`text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] ${
                  pathUrl === item.path ? "text-[hsl(var(--primary))]" : ""
                }`}
              >
                {item.title}
              </Link>
            )
          )}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <ThemeToggle/>
          
          <Link
            href="/auth/signin"
            className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))]"
          >
            Sign In
          </Link>
          <Link
            href="/auth/signup"
            className="px-6 py-2 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--white))] hover:bg-[hsl(var(--primaryho))] transition-colors"
          >
            Sign Up
          </Link>

          {/* Mobile Hamburger */}
          <button
            aria-label="Toggle Menu"
            className="xl:hidden ml-2"
            onClick={() => setNavigationOpen(!navigationOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {navigationOpen && (
          <div className="absolute top-full left-0 w-full bg-[hsl(var(--white))] dark:bg-[hsl(var(--blacksection))] shadow-solid-13 p-6 flex flex-col gap-4 xl:hidden">
            {menuData.map((item, i) => (
              <Link
                key={i}
                href={item.path || "#"}
                className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))]"
              >
                {item.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
