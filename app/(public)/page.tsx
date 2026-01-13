"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] text-center px-4 sm:px-6 md:px-8">
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Welcome to myCare
      </motion.h1>

      <motion.p
        className="max-w-2xl text-lg text-muted-foreground mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Your all-in-one hospital management platform for patients, doctors, and staff.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <Button variant="default" size="lg">
          Get Started
        </Button>
      </motion.div>
    </section>
  )
}
