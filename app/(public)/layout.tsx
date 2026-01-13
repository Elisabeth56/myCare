"use client"

import { ReactNode } from "react"
import { ThemeProvider } from "@/lib/theme/ThemeProvider"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

interface PublicLayoutProps {
  children: ReactNode
}

export default function PublicLayout({ children }: PublicLayoutProps) {
  const pathname = usePathname()

  return (
    <ThemeProvider >
      <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors">
        <Header />

        <AnimatePresence mode="wait">
          <motion.main
            key={pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex-1 px-4 sm:px-6 md:px-8"
          >
            {children}
          </motion.main>
        </AnimatePresence>

        <Footer />
      </div>
    </ThemeProvider>
  )
}
