"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const privacyPolicies = [
  "Data Collection",
  "Data Storage",
  "Third-party Sharing",
  "User Rights",
]

export default function PrivacyPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Privacy Policy</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {privacyPolicies.map((policy, i) => (
          <motion.div
            key={policy}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>{policy}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Details on how we handle user data and protect privacy across our platform.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
