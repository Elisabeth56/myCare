"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <section className="max-w-2xl mx-auto px-4 sm:px-6 md:px-8 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
      <motion.form
        className="flex flex-col gap-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <input
          type="text"
          placeholder="Name"
          className="border rounded-md p-3 w-full focus:outline-none focus:ring-1 focus:ring-primary"
        />
        <input
          type="email"
          placeholder="Email"
          className="border rounded-md p-3 w-full focus:outline-none focus:ring-1 focus:ring-primary"
        />
        <textarea
          placeholder="Message"
          className="border rounded-md p-3 w-full focus:outline-none focus:ring-1 focus:ring-primary"
          rows={5}
        />
        <Button type="submit" variant="default">Send Message</Button>
      </motion.form>
    </section>
  )
}
