"use client";

import Link from "next/link";

export default function AdminFooter() {
  return (
    <footer className="border-t bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="mx-auto max-w-7xl px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} MyCare Admin Panel</p>

        <nav className="flex gap-4 text-sm">
          <Link
            href="/admin/privacy"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Privacy
          </Link>
          <Link
            href="/admin/terms"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Terms
          </Link>
          <Link
            href="/admin/contact"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
