"use client";

import Link from "next/link";
import { useState } from "react";

export default function AdminHeader() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/admin", label: "Dashboard" },
    { href: "/admin/users", label: "Users" },
    { href: "/admin/patients", label: "Patients" },
    { href: "/admin/schedules", label: "Schedules" },
    { href: "/admin/settings", label: "Settings" },
  ];

  return (
    <header className="border-b bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-4 flex justify-between items-center">
        <span className="font-semibold text-lg text-gray-900 dark:text-white">
          Admin Panel
        </span>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 text-sm text-gray-900 dark:text-white">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-sm text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          onClick={() => setOpen(!open)}
        >
          Menu
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden px-4 pb-4 flex flex-col gap-3 text-sm text-gray-900 dark:text-white">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              onClick={() => setOpen(false)} // close menu on click
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
