"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "./ui/button"
import ThemeToggle from "@/components/themetoggle"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const toggleMobile = () => setMobileOpen((prev) => !prev)

  return (
    <header className="bg-background shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex justify-between items-center h-16">
        <Link href="/" className="text-xl font-bold">
          myCare
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <Link href="/(public)/pricing" className="hover:text-primary transition-colors">Pricing</Link>
          <Link href="/(public)/contact" className="hover:text-primary transition-colors">Contact</Link>
          <Link href="/(public)/compliance" className="hover:text-primary transition-colors">Compliance</Link>
          <Link href="/(public)/privacy" className="hover:text-primary transition-colors">Privacy</Link>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded hover:bg-accent transition-colors"
            onClick={toggleMobile}
          >
            <span className="sr-only">Open menu</span>
            <div className="w-6 h-0.5 bg-foreground mb-1"></div>
            <div className="w-6 h-0.5 bg-foreground mb-1"></div>
            <div className="w-6 h-0.5 bg-foreground"></div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-background overflow-hidden"
          >
            <div className="flex flex-col px-4 py-2 space-y-2">
              <Link href="/" onClick={toggleMobile} className="hover:text-primary transition-colors">Home</Link>
              <Link href="/(public)/pricing" onClick={toggleMobile} className="hover:text-primary transition-colors">Pricing</Link>
              <Link href="/(public)/contact" onClick={toggleMobile} className="hover:text-primary transition-colors">Contact</Link>
              <Link href="/(public)/compliance" onClick={toggleMobile} className="hover:text-primary transition-colors">Compliance</Link>
              <Link href="/(public)/privacy" onClick={toggleMobile} className="hover:text-primary transition-colors">Privacy</Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
